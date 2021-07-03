import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
    return ( 
        <div>
            <div style={{ display: "flex", paddingTop: "20px" }}>
                <div style={{ flex: "0 0 100px" }}>
                    <img 
                        src="/images/angma.png" 
                        alt="logo"
                        style={{ display: "block", width: "80px" }}
                    />
                </div>
                <Header as="h1">노고치</Header>
            </div>
            <Gnb />
        </div>
    );
}