"use client"; // Certifique-se de manter a diretiva de cliente
import React, { useEffect, useState } from 'react';

// Use a tipagem correta para params
const PostPage = ({ params }: { params: { id: string } }) => { 
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            const actualParams = await params; // Espera a resolução da Promise
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${actualParams.id}`); 

            if (response.ok) {
                const data = await response.json();
                setPost(data);
            } else {
                console.error('Failed to fetch post:', response.status);
            }
            setLoading(false);
        };
        fetchPost();
    }, [params]);

    if (loading) {
        return <div className="text-center text-lg text-gray-600">Loading...</div>;
    }

    if (!post) {
        return <div className="text-center text-lg text-red-600">Post not found</div>;
    }

    return (
        <div className="container mx-auto mt-12 p-6 bg-gray-50 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">{post.title}</h1>
            <p className="text-lg text-gray-800 text-center">{post.body}</p>
        </div>
    );
};

export default PostPage;
