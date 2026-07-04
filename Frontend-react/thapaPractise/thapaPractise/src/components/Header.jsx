import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/">home</Link>
      <br />
      <Link to="/upto8thvideo">upto8thvideo</Link>
      <br />
      <Link to="/video9ConditionalStatement">Video9ConditionalStatement</Link>
      <br />
      <Link to="/video11ImportExport">Video11ImportExport</Link>
       <br />
      <Link to="/video12LoopsMap">Video12LoopsMap</Link>
      <br />
      <Link to="/UptoVideo12Practise">UptoVideo12Practise</Link>
      <br />
      <Link to="/video12NetfilxCards">Video12NetfilxCards</Link>
      <br />
      <Link to="/parent">ChildProps</Link>
    </>
  );
}
export default Header;
