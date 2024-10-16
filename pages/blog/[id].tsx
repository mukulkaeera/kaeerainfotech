import React from 'react';
import { useRouter } from 'next/router';
import blogsData from '../../data/blog.json';
import styles from './index.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import Image from 'next/image';

const BlogPost: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const blog = blogsData.find(blog => blog.id === Number(id));

    if (!blog) {
        return <div className={styles.error}>Blog post not found.</div>;
    }

    const relatedBlogs = blogsData.filter(b => b.id !== blog.id);

    return (
        <>
            <Head>
                <title>Kaeera Ventures Blogs</title>
                <meta name="description" content={blog.title} />
                <meta name="keywords" content="Digital Marketing, SEO, Social Media, Online Presence, Kaeera Ventures" />
                <meta name="author" content="Kaeera Ventures" />
                <meta property="og:title" content="Kaeera Ventures | Your Digital Marketing Partner" />
                <meta property="og:description" content={blog.title} />
                <meta property="og:image" content={blog.image} />
                <meta property="og:url" content="www.kaeerainfotechnology.com" />
            </Head>
            <div className={styles.blogPostContainer}>
                <h1 className={styles.blogTitle}>{blog.title}</h1>
                <Image src={blog.image} alt={blog.title} className={styles.blogImage} height={500} width={500}/>

                <div className={styles.blogContent}>
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
                <div className={styles.blogMeta}>
                    <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
                    <p className={styles.blogDate}>Published on {blog.date}</p>
                </div>
                <h2 className={styles.relatedTitle}>Related Blogs</h2>
                <div className={styles.relatedBlogs}>
                    {relatedBlogs.slice(0,8).map(relatedBlog => (
                        <Link key={relatedBlog.id} href={`/blog/${relatedBlog.id}`} className={styles.relatedBlogCard}>
                            <Image src={relatedBlog.image} alt={relatedBlog.title} height={500} width={500} className={styles.relatedBlogImage} />
                            <h3>{relatedBlog.title}</h3>
                            <p>{relatedBlog.excerpt}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BlogPost;
