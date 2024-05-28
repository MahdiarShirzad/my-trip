import supabase from "./supabase";

export async function getFlights() {
  let { data, error } = await supabase.from("flights").select("*");

  if (error) {
    console.log(error);
  }

  return data;
}
