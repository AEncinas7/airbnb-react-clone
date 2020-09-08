import React /*, { useState }*/ from "react";

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name} from {this.props.lastname}!{" "}
      </div>
    );
  }
}

// const Hello = () => {
//   const [firstname, setFirstname] = useState('my name')
//   const [lastname, setLastname] = useState('my  lastname')
//
//   const handleClick = () => {
//     setFirstname('new name')
//   }
//
//   return (
//     <div>
//       Hello {firstname}!
//     </div>
//   )
// }

export default Hello;
