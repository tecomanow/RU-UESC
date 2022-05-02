import './styles.css';
import bootstrap from 'bootstrap'
import { Input } from "../../Components/Input";
import { Button } from 'react-bootstrap';
import SideBar from '../../Components/SideBar';
import { List } from '../../Components/List';

export function Home() {
    return (
      <>
      <div className='containers'>
        <SideBar></SideBar>
        <div className='container-menu'>
          <List></List>
        </div>
      </div>
      </>
    );
  }