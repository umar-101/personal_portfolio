import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ez1jxbyg",
  dataset: "production",
  apiVersion: "2022-05-01",
  useCdn: true,
  token:
    "sk5i0k9Hh6a9wToJxRUp9QevPn1MsH7IFf308uO06syMWfa9FD2SmuA1usKm6XcKiHFzVMeL85QX1sHqXk0SUxRmTqA0VKMyCWyLIN6Qf1mrGSJ0rpQGx6yQwCplARXYpZY4tBbA1nAu7wa87i93DtnIYz1zDHSsZCKO14aDTSMZgCf5XWqU",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
