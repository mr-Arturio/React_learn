// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

//destructuring the children prop and store it in a variable called children
export default function TabButton({ children, onSelect }) {


  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
