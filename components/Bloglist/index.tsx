import React from 'react';
import Link from 'next/link';
import blogsData from '../../data/blog.json'; // Adjust path if needed
import styles from './index.module.scss'; // Updated to match SCSS file name
import Image from 'next/image';

const BlogList: React.FC = () => {
    return (
        <div className={styles.blogListContainer}>
            <h1>Our Blogs</h1>
            <div className={styles.blogs}>
                {blogsData.slice(0,8).map(blog => (
                    <Link key={blog.id} href={`/blog/${blog.id}`} className={styles.blogCard}>
                        <Image src={blog.image} alt={blog.title} className={styles.blogImage} width={500} height={500}/>
                        <div className={styles.blogContent}>
                            <h2 className={styles.blogTitle}>{blog.title}</h2>
                            <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                            <p className={styles.blogAuthor}>by {blog.author} on {blog.date}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
