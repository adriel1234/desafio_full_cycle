'use client'; // Adicione esta linha para marcar o componente como cliente
import { useEffect, useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-6">Posts</h1>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li 
                        key={post.id} 
                        className="bg-gray-800 text-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
                    >
                        <Link 
                            href={`/post/${post.id}`} 
                            className="text-xl font-semibold text-blue-400 hover:underline"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
