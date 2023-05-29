import { User, Reservation, Listing } from "@prisma/client";

export type SafeListing = Omit<Listing,"createdAt"> & {
    createdAt: string;
}

export type SafeReservation = Omit<Reservation,
"createdAt" | "listing" | "startDate" | "endDate"> & {
    createdAt: string;
    listing: SafeListing;
    startDate: string;
    endDate: string;
}

export type SafeUser = Omit<User,
"createdAt" | "updatedAt" | "emailVerified"> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
}