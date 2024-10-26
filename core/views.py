from django.shortcuts import render

from .models import Post, Tag


def blog_view(request):
    posts = Post.objects.all()
    tags = Tag.objects.all()
    return render(request, 'core/blog.html', {'posts': posts, 'tags': tags})
