import supabase from "./supabase";

export async function addToWishlist(userId: string, wishlistItem: any) {
  const { data, error } = await supabase
    .from("users")
    .update({
      wishlist: supabase.raw("array_append(wishlist, ?)", [wishlistItem]),
    })
    .eq("id", userId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
