// Dummy text snippet example in TypeScript
interface DummyContent {
  id: number;
  title: string;
  body: string;
  isDraft: boolean;
}

const dummyPost: DummyContent = {
  id: 1,
  title: "Sample Dummy Post",
  body: "This is placeholder content for testing TypeScript types and API responses.",
  isDraft: true,
};

function formatDummyPost(post: DummyContent): string {
  const status = post.isDraft ? "[DRAFT]" : "[PUBLISHED]";
  return `${status} ${post.title} (#${post.id}) – ${post.body}`;
}

// Example usage
console.log(formatDummyPost(dummyPost));
