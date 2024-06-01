
import IconList from './IconList'; // Import the IconList component

const items = [
  {
    href: '',
    iconClass: 'fa-solid fa-brush',
    title: 'Title 1',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sit eius eligendi alias ipsam, nulla, quas tenetur incidunt pariatur magni perspiciatis possimus, temporibus necessitatibus sed. Amet accusantium ab unde aut.',
  },
  {
    href: '',
    iconClass: 'fa-solid fa-brush',
    title: 'Title 2',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sit eius eligendi alias ipsam, nulla, quas tenetur incidunt pariatur magni perspiciatis possimus, temporibus necessitatibus sed. Amet accusantium ab unde aut.',
  },
  {
    href: '',
    iconClass: 'fa-solid fa-brush',
    title: 'Title 3',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sit eius eligendi alias ipsam, nulla, quas tenetur incidunt pariatur magni perspiciatis possimus, temporibus necessitatibus sed. Amet accusantium ab unde aut.',
  },
  // Add more items as needed
];

const Blog = () => {
  return (
    <>
      <div id="exp-header">Text and Thoughts</div>
      <IconList items={items} />
    </>
  );
};

export default Blog;
