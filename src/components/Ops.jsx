
import IconList from './IconList'; // Import the IconList component

const items = [
  {
    href: '',
    iconClass: "fa-brands fa-square-github",
    title: 'Title 1',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sit eius eligendi alias ipsam, nulla, quas tenetur incidunt pariatur magni perspiciatis possimus, temporibus necessitatibus sed. Amet accusantium ab unde aut.',
  },
  {
    href: '',
    iconClass: "fa-brands fa-square-github",
    title: 'Title 2',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sit eius eligendi alias ipsam, nulla, quas tenetur incidunt pariatur magni perspiciatis possimus, temporibus necessitatibus sed. Amet accusantium ab unde aut.',
  },
  {
    href: 'https://github.com/connor-ve/dark-terminal',
    iconClass: "fa-brands fa-square-github",
    title: 'ByteBorne : Idle Ascent',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sit eius eligendi alias ipsam, nulla, quas tenetur incidunt pariatur magni perspiciatis possimus, temporibus necessitatibus sed. Amet accusantium ab unde aut.',
  },
  // Add more items as needed
];

const Ops = () => {
  return (
    <>
      <div className="list-header">Open Source Projects</div>
      <IconList items={items} />
    </>
  );
};

export default Ops;
