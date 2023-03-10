import {
  Dashboard,
  Heart,
  Comment,
  CommentInput,
  MobileSearch,
  DesktopSearch,
  PensilSquare,
  WriteQuote,
  QuoteCommentType,
  NewsFeedQuoteTypes,
} from 'components';
import { useNewsFeed } from 'hooks';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'next/link';
import Head from 'next/head';

const AllQuotes = () => {
  const {
    quotesData,
    i18n,
    image,
    avatarLoader,
    id,
    t,
    likeToggleHandler,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    query,
  } = useNewsFeed();

  return (
    <>
      <Head>
        <title>News Feed</title>
      </Head>
      {query.show === 'write-quote' && <WriteQuote />}
      <Dashboard>
        {quotesData && isSuccess && (
          <div className='md:px-10'>
            <div className='md:flex items-center max-w-[58.6rem] w-full flex-col mx-auto'>
              <div className='w-full'>
                <InfiniteScroll
                  hasMore={hasNextPage!}
                  next={fetchNextPage}
                  loader
                  dataLength={quotesData.pages.length * 3}
                >
                  {query.show === 'search' && <MobileSearch />}

                  <div className='hidden md:block mb-6 w-full mt-8 md:max-w-[58.6rem]'>
                    <DesktopSearch />
                  </div>

                  <div className='md:hidden px-10 mt-8 mb-10'>
                    <div
                      className={`bg-transparent opacity-60 rounded-xl h-full w-full 
                      }`}
                    />
                    <div className='flex items-center relative min-w-max'>
                      <Link
                        href='/news-feed?show=write-quote'
                        className='flex items-center'
                      >
                        <PensilSquare />
                        <p className='text-xl font-normal text-white ml-4'>
                          {t('quotes.writeNewQuote')}
                        </p>
                      </Link>
                    </div>
                  </div>

                  {quotesData?.pages.map((page) =>
                    page.data.data.map((quote: NewsFeedQuoteTypes) => {
                      return (
                        <div
                          key={quote.id}
                          className='bg-black mb-8 md:mb-10 px-9 py-7  md:rounded-xl md:max-w-[58.6rem]'
                        >
                          <div className='flex items-center'>
                            <Image
                              src={quote.movie.user.image}
                              loader={() => quote.movie.user.image}
                              width={40}
                              height={40}
                              alt='avatar'
                              className='rounded-full w-10 h-10 lg:w-[3.2rem] lg:h-[3.2rem] object-cover'
                              unoptimized={true}
                            />
                            <h2 className='text-white ml-4 font-normal text-base md:text-xl'>
                              {quote.movie.user.name}
                            </h2>
                          </div>
                          <div className='my-4 flex break-all flex-wrap'>
                            <p className='text-white font-normal text-base md:text-xl'>
                              {`"${
                                i18n.language === 'ka'
                                  ? quote.text.ka
                                  : quote.text.en
                              }"`}
                            </p>
                            <span className='text-white px-1'>-</span>
                            <p>
                              <span className='text-custom-orange-200 font-medium text-base md:text-xl'>
                                {`${
                                  i18n.language === 'ka'
                                    ? quote.movie.name.ka
                                    : quote.movie.name.en
                                }.`}
                              </span>
                              <span className='text-white font-normal text-base md:text-xl ml-1'>{`(${quote.movie.year})`}</span>
                            </p>
                          </div>

                          <div>
                            <div className='grid grid-cols-3 mt-8'>
                              <Image
                                src={quote.image}
                                loader={() => quote.image}
                                alt='quote image'
                                className='rounded-xl w-full object-cover col-span-3 h-52 md:h-[19rem] lg:h-[31rem]'
                                width={358}
                                height={302}
                                unoptimized={true}
                              />
                            </div>
                            <div className='mt-5'>
                              <div className='flex flex-wrap'>
                                <div className='flex items-center mr-6 cursor-pointer'>
                                  <span className='text-white text-xl font-normal mr-3 break-all'>
                                    {quote.comments.length}
                                  </span>
                                  <Comment />
                                </div>
                                <div className='flex items-center'>
                                  <span className='text-white text-xl font-normal mr-3 break-all'>
                                    {quote.likes ? quote.likes.length : 0}
                                  </span>
                                  <div
                                    className='cursor-pointer'
                                    onClick={() =>
                                      likeToggleHandler(
                                        quote.id.toString()!,
                                        quote.movie_id?.toString()!
                                      )
                                    }
                                  >
                                    <Heart
                                      color={
                                        !quote.likes.length
                                          ? '#fff'
                                          : quote.likes.find(
                                              (like: { user_id: string }) =>
                                                like.user_id === id
                                            )
                                          ? '#F3426C'
                                          : '#fff'
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {quote.comments &&
                              quote.comments.map(
                                (comment: QuoteCommentType) => {
                                  return (
                                    <div
                                      key={comment.id}
                                      className='w-full mt-4'
                                    >
                                      <div className='border-b border-solid border-movie-border mb-4' />
                                      <div className='flex items-center'>
                                        <Image
                                          src={comment.user.image}
                                          className='rounded-full object-cover w-10 h-10 lg:w-[3.2rem] lg:h-[3.2rem]'
                                          alt='user image'
                                          width={40}
                                          height={40}
                                          loader={() => comment.user.image}
                                          unoptimized={true}
                                        />
                                        <div className='text-white ml-4 text-base md:text-xl font-medium break-all'>
                                          {comment.user.name}
                                        </div>
                                      </div>
                                      <p className='font-normal text-base md:text-xl mt-3 break-all text-white ml-[3.5rem] md:ml-[3.5rem] lg:ml-[4.2rem]'>
                                        {comment.comment}
                                      </p>
                                    </div>
                                  );
                                }
                              )}

                            <div className='border-b border-solid border-movie-border mt-6' />
                            <div className='mt-4 flex items-center'>
                              {image && (
                                <div className='w-10 h-10 md:min-w-[3.2rem] md:min-h-[3.2rem]'>
                                  <Image
                                    src={image}
                                    className='rounded-full object-cover w-full h-full'
                                    alt='user image'
                                    width={40}
                                    height={40}
                                    loader={avatarLoader}
                                    unoptimized={true}
                                  />
                                </div>
                              )}
                              <CommentInput
                                name='comment'
                                quoteId={quote.id.toString()!}
                                movieId={quote.movie_id?.toString()!}
                                type='text'
                                containerClass='ml-3 w-full'
                                placeholder={t('quotes.writeComment')}
                              />
                              =
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </InfiniteScroll>
              </div>
            </div>
          </div>
        )}
      </Dashboard>
    </>
  );
};

export default AllQuotes;
