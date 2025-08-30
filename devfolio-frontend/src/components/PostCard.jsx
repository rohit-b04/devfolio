import React from 'react'
import { Button } from '@/components/ui/button'
import { FaHeart, FaComment, FaShare } from 'react-icons/fa'

const PostCard = ({ post }) => {
  return (
    <div className='bg-white dark:bg-[#1F2937] rounded-lg shadow-md p-6 mb-6 border border-border'>
      <div className='flex items-center mb-4'>
        <img 
          src={post.author.avatar || '/default-avatar.png'} 
          alt={post.author.username}
          className='w-10 h-10 rounded-full mr-3'
        />
        <div>
          <h3 className='font-semibold text-foreground'>{post.author.username}</h3>
          <p className='text-sm text-muted-foreground'>{new Date(post.created_at).toLocaleDateString()}</p>
        </div>
      </div>
      
      <h2 className='text-xl font-bold mb-3 text-foreground'>{post.title}</h2>
      <p className='text-foreground mb-4 line-clamp-3'>{post.content}</p>
      
      {post.image && (
        <img 
          src={post.image} 
          alt={post.title}
          className='w-full h-64 object-cover rounded-lg mb-4'
        />
      )}
      
      <div className='flex flex-wrap gap-2 mb-4'>
        {post.tags?.map((tag, index) => (
          <span 
            key={index}
            className='px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm'
          >
            #{tag}
          </span>
        ))}
      </div>
      
      <div className='flex items-center justify-between pt-4 border-t border-border'>
        <div className='flex items-center gap-4'>
          <Button variant="ghost" size="sm" className='flex items-center gap-2'>
            <FaHeart className='text-red-500' />
            <span>{post.likes_count || 0}</span>
          </Button>
          <Button variant="ghost" size="sm" className='flex items-center gap-2'>
            <FaComment />
            <span>{post.comments_count || 0}</span>
          </Button>
        </div>
        <Button variant="ghost" size="sm">
          <FaShare />
        </Button>
      </div>
    </div>
  )
}

export default PostCard
