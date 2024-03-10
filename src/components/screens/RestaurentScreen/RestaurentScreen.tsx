import React from "react";
import ItemsCard from "../../widgets/ItemsCard/ItemsCard";
import styles from "./RestaurentScreen.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MenuItems from "../../widgets/MenuItems/MenuItems";
import ItemImageCard from "../../widgets/ItemImageCard/ItemImageCard";

function RestaurentScreen() {
    return (
        <div className={styles.restaurent_screen}>
            <h1>Resturent Name</h1>
            <input
                type="search"
                placeholder="Search...."
                className={styles.search_bar}
            />
            <div className={styles.horizontal_scroll}>
                <MenuItems
                    background="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name="all"
                />
                <MenuItems
                    background="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name="Burger"
                />
                <MenuItems
                    background="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name="Pizza"
                />
                <MenuItems
                    background="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name="Juice"
                />
                <MenuItems
                    background="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name="chicken"
                />
                <MenuItems
                    background="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name="Biriyani"
                /> <MenuItems
                    background="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name="Beef"
                /> <MenuItems
                    background="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name="Shakes"
                />
                <div className={styles.show_all}>
                    <p>Show</p>
                    <p>All</p>
                </div>
            </div>
            <h2>Popular</h2>
            <div className={styles.horizontal_scroll}>
                <ItemImageCard />
                <ItemImageCard />
                <ItemImageCard />
            </div>
            <h2>Menu</h2>
            <ItemsCard />
            <ItemsCard />
            <ItemsCard />
            <ItemsCard />
        </div>
    );
}

export default RestaurentScreen;
