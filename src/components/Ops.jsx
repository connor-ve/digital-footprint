
import IconList from './IconList'; // Import the IconList component

const items = [
  {
    href: '',
    iconClass: "fa-brands fa-square-github",
    title: 'yawn + sleep',
    description: 'yawn and sleep are an attempt to help modernize the landscape of Progress ABL (previously 4gl). Conceptually yawn can be understood as the npm of ABL. A basic cli to allow the user to install Open Source Packages built with progress. Sleep is the counterpart of yawn and acts as a registry to hold our open source packages for download.',
  },
  {
    href: 'https://github.com/connor-ve/jira-cli.go',
    iconClass: "fa-brands fa-square-github",
    title: 'jira-cli.go',
    description: 'For work I am commonly asked to use jira as a way to comminuite and update what I am working on. As a true programmer using a GUI to change data feels like a waste of time. THis extension should allow the developer to log into jira given they have an api key and update their tracking boards with commands.',
  },
  {
    href: 'https://github.com/connor-ve/byte-borne-cli',
    iconClass: "fa-brands fa-square-github",
    title: 'ByteBorne : Idle Ascent',
    description: 'Just your average rpg in your terminal. Built using GoLang with a focus in mod-ability.',
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
