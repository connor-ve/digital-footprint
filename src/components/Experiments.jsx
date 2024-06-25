
import IconList from './IconList'; // Import the IconList component

const items = [
  {
    href: '',
    iconClass: 'fa-solid fa-brush',
    title: 'Squat Physics Simulation',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sit eius eligendi alias ipsam, nulla, quas tenetur incidunt pariatur magni perspiciatis possimus, temporibus necessitatibus sed. Amet accusantium ab unde aut.',
  },
  {
    href: '',
    iconClass: 'fa-solid fa-brush',
    title: 'Conway\'s Game of Life',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sit eius eligendi alias ipsam, nulla, quas tenetur incidunt pariatur magni perspiciatis possimus, temporibus necessitatibus sed. Amet accusantium ab unde aut.',
  },
  {
    href: '',
    iconClass: 'fa-solid fa-brush',
    title: '8-bit Animation of Levi',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sit eius eligendi alias ipsam, nulla, quas tenetur incidunt pariatur magni perspiciatis possimus, temporibus necessitatibus sed. Amet accusantium ab unde aut.',
  },
  // Add more items as needed
];

const Experiments = () => {
  return (
    <>
      <div className="list-header">Experiments</div>
      <IconList items={items} />
    </>
  );
};

export default Experiments;
