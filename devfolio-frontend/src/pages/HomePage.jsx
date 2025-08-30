import React, { useState, useEffect } from 'react'
import PostCard from '@/components/PostCard'
import CreatePostForm from '@/components/CreatePostForm'
import { Button } from '@/components/ui/button'

const HomePage = () => {
  const [posts, setPosts] = useState([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [loading, setLoading] = useState(true)

  // Mock data - replace with actual API calls
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPosts([
        {
          id: 1,
          title: "My First React Project",
          content: "Just finished building my first React application! It's a simple todo app but I learned so much about components, state management, and hooks. Looking forward to building more complex applications.",
          image: "https://via.placeholder.com/600x300?text=React+Project",
          tags: ["react", "javascript", "frontend"],
          author: {
            username: "john_doe",
            avatar: "https://via.placeholder.com/40x40?text=JD"
          },
          created_at: "2024-01-15T10:30:00Z",
          likes_count: 24,
          comments_count: 5
        },
        {
          id: 2,
          title: "Learning Django REST Framework",
          content: "Started learning Django REST Framework for building APIs. The serializers and viewsets make it so much easier to create RESTful APIs. Here's what I've learned so far...",
          image: null,
          tags: ["django", "python", "backend", "api"],
          author: {
            username: "jane_smith",
            avatar: "https://via.placeholder.com/40x40?text=JS"
          },
          created_at: "2024-01-14T15:45:00Z",
          likes_count: 18,
          comments_count: 3
        }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const handleCreatePost = (postData) => {
    const newPost = {
      id: posts.length + 1,
      ...postData,
      author: {
        username: "current_user",
        avatar: "https://via.placeholder.com/40x40?text=CU"
      },
      created_at: new Date().toISOString(),
      likes_count: 0,
      comments_count: 0
    }
    setPosts([newPost, ...posts])
    setShowCreateForm(false)
  }

  if (loading) {
    return (
      <div className='min-h-screen bg-background'>
        <div className='max-container padding-x py-8'>
          <div className='flex justify-center items-center h-64'>
            <div className='text-muted-foreground'>Loading posts...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-background'>
      <div className='max-container padding-x py-8'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold text-foreground'>Developer Portfolio Feed</h1>
          <Button onClick={() => setShowCreateForm(true)}>
            Create Post
          </Button>
        </div>
        
        <div className='max-w-2xl mx-auto'>
          {posts.length === 0 ? (
            <div className='text-center py-12'>
              <p className='text-muted-foreground'>No posts yet. Be the first to share something!</p>
            </div>
          ) : (
            posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))
          )}
        </div>
        
        {showCreateForm && (
          <CreatePostForm
            onClose={() => setShowCreateForm(false)}
            onSubmit={handleCreatePost}
          />
        )}
      </div>
    </div>
  )
}

export default HomePage
