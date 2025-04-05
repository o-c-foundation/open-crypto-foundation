import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft, FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';

// Sample blog post data - this would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Understanding Common Cryptocurrency Scams in 2023",
    slug: "understanding-common-crypto-scams-2023",
    excerpt: "A detailed breakdown of the most prevalent scams targeting crypto users this year, and how to protect yourself from them.",
    date: "2023-06-15",
    author: "Alex Chen",
    category: "Security",
    content: `
      <p class="text-lg mb-4">Cryptocurrency scams have evolved significantly in 2023, becoming more sophisticated and difficult to detect. This article examines the most common types of scams currently targeting crypto users and provides actionable steps to protect yourself.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">1. Fake Exchange and Website Scams</h2>
      
      <p class="mb-4">Scammers are creating increasingly convincing replicas of popular cryptocurrency exchanges and wallet websites. These fake sites often have URLs that closely resemble legitimate services, perhaps with a slight misspelling or different domain extension.</p>
      
      <p class="mb-4">The fake websites are designed to steal your login credentials or trick you into sending cryptocurrency to the scammer's wallet.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">How to Protect Yourself:</h3>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Always double-check the URL before entering sensitive information</li>
        <li>Bookmark official websites instead of using search engines to find them</li>
        <li>Enable two-factor authentication on all your crypto accounts</li>
        <li>Use a password manager that will not auto-fill credentials on wrong domains</li>
        <li>Verify the website's security certificate by clicking the lock icon in your browser's address bar</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">2. Investment Scams and Fraudulent Projects</h2>
      
      <p class="mb-4">Investment scams remain the most costly type of cryptocurrency fraud. These include:</p>
      
      <p class="mb-4"><strong>Rug Pulls:</strong> Developers create seemingly legitimate cryptocurrency projects, encourage investment, then suddenly abandon the project and take all the funds.</p>
      
      <p class="mb-4"><strong>Pump and Dump Schemes:</strong> Scammers artificially inflate the price of a low-value cryptocurrency through false statements, sell their overvalued coins, and then allow the price to crash.</p>
      
      <p class="mb-4"><strong>Guaranteed Return Scams:</strong> Schemes promising specific, high returns on crypto investments. The initial investments might be paid out using funds from new investors (Ponzi scheme), but eventually, the scammers disappear with all remaining funds.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">Red Flags to Watch For:</h3>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Promises of guaranteed returns or unusually high APY percentages</li>
        <li>Pressure to recruit friends and family (multi-level marketing structure)</li>
        <li>Anonymous or unverifiable development teams</li>
        <li>No clear use case for the token or overly complex explanations</li>
        <li>Limited or locked liquidity provisions</li>
        <li>Excessive marketing with celebrity endorsements</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">3. Smart Contract Exploits</h2>
      
      <p class="mb-4">Not all cryptocurrency losses are due to explicit scams—some result from technical vulnerabilities in smart contracts. In 2023, we've seen a rise in exploits targeting decentralized finance (DeFi) protocols.</p>
      
      <p class="mb-4">These exploits can drain millions of dollars from protocols through code vulnerabilities, flash loan attacks, or oracle manipulation.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">How to Reduce Your Risk:</h3>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Prioritize established protocols with proven security records</li>
        <li>Look for projects that have undergone multiple security audits from reputable firms</li>
        <li>Start with small investments when using new protocols</li>
        <li>Monitor project social channels for exploit announcements</li>
        <li>Use security tools that analyze smart contract risk</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">4. Social Engineering Attacks</h2>
      
      <p class="mb-4">Scammers are increasingly using sophisticated social engineering tactics to trick crypto users, including:</p>
      
      <p class="mb-4"><strong>Support Scams:</strong> Fake customer support representatives contact users who have posted about issues on social media, directing them to malicious websites or requesting private keys.</p>
      
      <p class="mb-4"><strong>Romance Scams:</strong> Developing romantic relationships online before introducing cryptocurrency investment opportunities.</p>
      
      <p class="mb-4"><strong>Giveaway Scams:</strong> Fake promotional giveaways, often impersonating well-known crypto personalities or companies, requesting that you send funds to "verify your address" before receiving a larger amount back.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-white">Best Practices:</h3>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Never share your private keys or seed phrases with anyone, including supposed support staff</li>
        <li>Verify all communication through official channels</li>
        <li>Be extremely skeptical of crypto investment advice from new online acquaintances</li>
        <li>Remember that legitimate giveaways never require you to send funds first</li>
        <li>Use unique passwords and 2FA for all crypto-related accounts</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Conclusion</h2>
      
      <p class="mb-4">As cryptocurrency adoption increases, so does the sophistication of scams targeting users. Staying informed about the latest scam techniques is essential for protecting your assets.</p>
      
      <p class="mb-4">Remember the core principles of crypto security:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>If a deal seems too good to be true, it probably is</li>
        <li>Never share your private keys or seed phrases</li>
        <li>Do thorough research before investing in any project</li>
        <li>Use hardware wallets for significant holdings</li>
        <li>Enable all available security features on your accounts</li>
      </ul>
      
      <p class="mb-4">By staying vigilant and following these guidelines, you can significantly reduce your risk of falling victim to cryptocurrency scams in 2023 and beyond.</p>
    `,
    tags: ["Security", "Scams", "Crypto Safety", "DeFi", "Investment Protection"],
    imageUrl: "/images/blog/crypto-scams.jpg",
    relatedPosts: [2, 6]
  },
  // Additional posts could be defined here
];

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Find the post that matches the slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // Get related posts
  const relatedPosts = post?.relatedPosts 
    ? blogPosts.filter(relPost => post.relatedPosts.includes(relPost.id))
    : [];

  // Handle case when post is not found or still loading
  if (!post) {
    return (
      <div className="py-20 text-center">
        <div className="container px-4 md:px-6 mx-auto">
          <h1 className="text-2xl font-bold text-white mb-4">Loading article...</h1>
          {router.isReady && (
            <>
              <p className="text-gray-400 mb-6">The article could not be found or is still loading.</p>
              <Link href="/blog">
                <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition-colors">
                  Back to Blog
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | OCF Blog</title>
        <meta name="description" content={post.excerpt} />
        {/* Open Graph meta tags for better social sharing */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.imageUrl} />
      </Head>

      <div className="py-12 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          {/* Back navigation */}
          <div className="mb-8">
            <Link href="/blog">
              <a className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <FaArrowLeft className="mr-2" />
                Back to All Articles
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                {/* Featured Image */}
                <div className="h-64 bg-gray-700 relative">
                  {/* This would be an actual image in production */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <span className="text-lg">Featured Image</span>
                  </div>
                </div>
                
                {/* Article Content */}
                <div className="p-6 md:p-8">
                  {/* Category & Date */}
                  <div className="flex flex-wrap items-center mb-4 gap-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-900/30 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <FaCalendarAlt className="mr-1" size={12} />
                      {post.date}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <FaUser className="mr-1" size={12} />
                      {post.author}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {post.title}
                  </h1>
                  
                  {/* Article Content */}
                  <div 
                    className="prose prose-lg prose-invert max-w-none text-gray-300"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-gray-400">
                        <FaTag className="inline mr-2" />
                        Tags:
                      </span>
                      {post.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Share */}
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-4">Share this article:</span>
                      <div className="flex space-x-3">
                        <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                          <FaTwitter />
                        </a>
                        <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                          <FaLinkedinIn />
                        </a>
                        <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                          <FaFacebookF />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 text-white">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedPosts.map(relatedPost => (
                      <div key={relatedPost.id} className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
                        <div className="p-6">
                          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-900/30 rounded-full mb-3">
                            {relatedPost.category}
                          </span>
                          <Link href={`/blog/${relatedPost.slug}`}>
                            <a className="block">
                              <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400 transition-colors">
                                {relatedPost.title}
                              </h3>
                            </a>
                          </Link>
                          <p className="text-gray-300 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">{relatedPost.date}</span>
                            <Link href={`/blog/${relatedPost.slug}`}>
                              <a className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                                Read More →
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Author Info */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">About the Author</h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-medium text-white">{post.author}</h4>
                    <p className="text-gray-400 text-sm">Crypto Security Analyst</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Specializes in cryptocurrency security research and educational content creation. Has been in the blockchain space since 2016 and regularly contributes to leading industry publications.
                </p>
              </div>
              
              {/* Newsletter Subscription */}
              <NewsletterSubscribe />
              
              {/* Article Categories */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Explore Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog?category=Security">
                      <a className="text-blue-400 hover:text-blue-300 transition-colors">Security</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog?category=Announcements">
                      <a className="text-blue-400 hover:text-blue-300 transition-colors">Announcements</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog?category=Research">
                      <a className="text-blue-400 hover:text-blue-300 transition-colors">Research</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog?category=Reports">
                      <a className="text-blue-400 hover:text-blue-300 transition-colors">Reports</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 