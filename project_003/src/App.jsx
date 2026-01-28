import Contact from "./components/contact"
import whiskerson from "../images/Whiskerson.jfif"
import fluffykins from "../images/fluffykins.jfif"
import felix from "../images/felix.jfif"
import pumpkin from "../images/pumpkin.jfif"

export default function App(){
        return (
                <div className="contacts">
                        <Contact img={whiskerson}
                                name="Mr. Whiskerson"
                                phone="(212) 555-1234"
                                email="mr.whiskaz@catnap.meow" />
                        <Contact img = {fluffykins}
                                name ="Mr. fluffykins" 
                                phone="(212) 555-2345"
                                email="fluff@me.com"/>
                        <Contact img = {felix}
                                name="Felix"
                                phone="(212) 555-4567"
                                email="thecat@hotmail.com" />
                        <Contact img = {pumpkin}
                                name="Pumpkin"
                                phone="(0800) CAT KING"
                        email="pumpkin@scrimba.com" />
                </div>
        )
}

