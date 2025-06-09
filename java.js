function toggleStory(storyId) {
    const story = document.getElementById(storyId);
    if (story.style.display === 'block') {
        story.style.display = 'none';
    } else {
        story.style.display = 'block';
    }
}
