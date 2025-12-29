import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { forumTopics } from '@/data/resources';
import { ForumPost, ForumTopic } from '@/types';
import { ArrowLeft, MessageCircle, Send, Users } from 'lucide-react';
import { toast } from 'sonner';

// Mock posts data
const mockPosts: Record<string, ForumPost[]> = {
  general: [
    {
      id: '1',
      topicId: 'general',
      author: 'Anonymous User',
      content: 'Just wanted to share that today was a good day. Small wins matter! 🌟',
      createdAt: new Date(Date.now() - 3600000),
      replies: [],
    },
    {
      id: '2',
      topicId: 'general',
      author: 'HopefulHeart',
      content: 'Feeling grateful for this community. Its comforting to know we are not alone in our struggles.',
      createdAt: new Date(Date.now() - 7200000),
      replies: [],
    },
  ],
  'anxiety-depression': [
    {
      id: '3',
      topicId: 'anxiety-depression',
      author: 'RecoveryPath',
      content: 'Does anyone have tips for managing morning anxiety? The first hour after waking up is always the hardest for me.',
      createdAt: new Date(Date.now() - 14400000),
      replies: [],
    },
  ],
  'student-work': [
    {
      id: '4',
      topicId: 'student-work',
      author: 'BusyBee',
      content: 'Finals week is here and I am overwhelmed. Any study break suggestions that actually help you relax?',
      createdAt: new Date(Date.now() - 28800000),
      replies: [],
    },
  ],
  motivation: [
    {
      id: '5',
      topicId: 'motivation',
      author: 'DailyGratitude',
      content: '"The only way out is through." - Robert Frost. This quote helps me remember that difficult times are temporary. 💪',
      createdAt: new Date(Date.now() - 43200000),
      replies: [],
    },
  ],
};

const Forum = () => {
  const [selectedTopic, setSelectedTopic] = useState<ForumTopic | null>(null);
  const [posts, setPosts] = useState<Record<string, ForumPost[]>>(mockPosts);
  const [newPostContent, setNewPostContent] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);

  const handleCreatePost = () => {
    if (!newPostContent.trim() || !selectedTopic) return;

    const newPost: ForumPost = {
      id: Date.now().toString(),
      topicId: selectedTopic.id,
      author: 'You',
      content: newPostContent,
      createdAt: new Date(),
      replies: [],
    };

    setPosts(prev => ({
      ...prev,
      [selectedTopic.id]: [newPost, ...(prev[selectedTopic.id] || [])],
    }));

    setNewPostContent('');
    setShowNewPost(false);
    toast.success('Post shared successfully!');
  };

  const formatTime = (date: Date) => {
    const diff = Date.now() - date.getTime();
    const hours = Math.floor(diff / 3600000);
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  if (selectedTopic) {
    const topicPosts = posts[selectedTopic.id] || [];

    return (
      <Layout title={selectedTopic.title} showBack>
        <div className="container mx-auto px-4 py-6">
          {/* Back to Topics */}
          <Button
            variant="ghost"
            className="mb-4 gap-2"
            onClick={() => setSelectedTopic(null)}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Topics
          </Button>

          {/* Topic Header */}
          <Card className="mb-6 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{selectedTopic.icon}</span>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">
                    {selectedTopic.title}
                  </h1>
                  <p className="text-muted-foreground">{selectedTopic.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* New Post Button */}
          <Button
            className="mb-6 w-full sm:w-auto"
            onClick={() => setShowNewPost(true)}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Share Your Thoughts
          </Button>

          {/* Posts */}
          <div className="space-y-4 stagger-children">
            {topicPosts.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">
                    No posts yet. Be the first to share!
                  </p>
                </CardContent>
              </Card>
            ) : (
              topicPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-card transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                        {post.author.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-foreground">
                            {post.author}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {formatTime(post.createdAt)}
                          </span>
                        </div>
                        <p className="text-foreground/90 whitespace-pre-wrap">
                          {post.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* New Post Dialog */}
          <Dialog open={showNewPost} onOpenChange={setShowNewPost}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Share Your Thoughts</DialogTitle>
                <DialogDescription>
                  This is a safe space. Your post will be shared anonymously if you prefer.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <Textarea
                  placeholder="What's on your mind?"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  rows={4}
                />
                <div className="flex justify-end gap-3">
                  <Button variant="outline" onClick={() => setShowNewPost(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleCreatePost} disabled={!newPostContent.trim()}>
                    <Send className="h-4 w-4 mr-2" />
                    Post
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Community Guidelines */}
          <Card className="mt-8 border-primary/20 bg-primary/5">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground text-center">
                💙 Remember: Be kind, supportive, and respectful. This is a judgment-free zone.
              </p>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Peer Support Forum" showBack>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <div className="flex items-center gap-3 mb-2">
            <Users className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">
              Peer Support Forum
            </h1>
          </div>
          <p className="text-muted-foreground">
            Connect with others who understand. Share experiences and find support.
          </p>
        </div>

        {/* Topic Cards */}
        <div className="grid gap-4 sm:grid-cols-2 stagger-children">
          {forumTopics.map((topic) => (
            <Card
              key={topic.id}
              className="cursor-pointer group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              onClick={() => setSelectedTopic(topic)}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{topic.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-1">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                      {topic.description}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {topic.postCount} posts
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guidelines */}
        <Card className="mt-8 border-primary/20 bg-primary/5 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-3">Community Guidelines</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Be respectful and supportive of others</li>
              <li>• Share your experiences, but avoid giving medical advice</li>
              <li>• Maintain confidentiality - what's shared here stays here</li>
              <li>• Report any concerning content to moderators</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Forum;
