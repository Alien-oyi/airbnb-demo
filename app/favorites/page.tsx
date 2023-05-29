import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListing from "../actions/getFavoriteListing";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
    const listings= await getFavoriteListing();
    const currentUser = await getCurrentUser();
    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState 
                title="No favorites yet"
                subtitle="You haven't favorited any listings yet"/>
            </ClientOnly>
        )
    }
    return (
        <ClientOnly>
            <FavoritesClient 
            listings={listings}
            currentUser={currentUser}/>
        </ClientOnly>

    )
}