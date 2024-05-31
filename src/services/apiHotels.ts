import supabase from "./supabase";

export async function getHotels() {
  let { data, error } = await supabase.from("hotels").select("*");

  if (error) {
    console.log(error);
  }

  return data;
}
