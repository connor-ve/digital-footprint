
import IconList from './IconList'; // Import the IconList component

const items = [
  {
    href: 'https://dev.to/connor-ve/how-to-make-glass-with-css-418j',
    iconClass: 'fa-brands fa-dev',
    title: 'How to make glass... with CSS!',
    description: '5 lines of code are all that is need to achieve this effect.',
  },
  {
    href: 'https://dev.to/connor-ve/starter-project-idea-conways-game-of-life-1jfi',
    iconClass: 'fa-brands fa-dev',
    title: 'Starter Project Idea: Conway\'s Game of Life',
    description: 'A simple tutorial on how to develop your version of Conway\'s Game of Life with Vanilla JS.',
  },
  {
    href: 'https://dev.to/connor-ve/how-to-use-keyword-arguments-in-python-gcl',
    iconClass: 'fa-brands fa-dev',
    title: 'How to use Keyword Arguments in Python',
    description: 'Tutorial and Explanation about what Keyword Arguments are and how to use them withing python.',
  },
  // Add more items as needed
];

const Blog = () => {
  return (
    <>
      <div className="list-header">Text and Thoughts</div>
      <IconList items={items} />
    </>
  );
};

export default Blog;
