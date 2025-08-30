import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const CreatePostForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: null,
    tags: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const tags = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    onSubmit({ ...formData, tags })
    setFormData({ title: '', content: '', image: null, tags: '' })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setFormData({ ...formData, image: file })
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
      <div className='bg-white dark:bg-[#1F2937] rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold text-foreground'>Create New Post</h2>
          <Button variant="ghost" onClick={onClose} className='text-muted-foreground hover:text-foreground'>
            ✕
          </Button>
        </div>
        
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-foreground mb-2'>
              Title *
            </label>
            <input
              type='text'
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className='w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent'
              placeholder='Enter post title...'
              required
            />
          </div>
          
          <div>
            <label className='block text-sm font-medium text-foreground mb-2'>
              Content *
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className='w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent h-32 resize-vertical'
              placeholder='Share your thoughts, projects, or achievements...'
              required
            />
          </div>
          
          <div>
            <label className='block text-sm font-medium text-foreground mb-2'>
              Image
            </label>
            <input
              type='file'
              onChange={handleImageChange}
              accept='image/*'
              className='w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent'
            />
          </div>
          
          <div>
            <label className='block text-sm font-medium text-foreground mb-2'>
              Tags
            </label>
            <input
              type='text'
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              className='w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent'
              placeholder='react, javascript, webdev (comma separated)'
            />
          </div>
          
          <div className='flex gap-4 pt-4'>
            <Button type='submit' className='flex-1'>
              Create Post
            </Button>
            <Button type='button' variant='outline' onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePostForm
