import supabase from "./supabase";

type Login = {
  email: string;
  password: string;
};

type SignUp = {
  email: string;
  password: string;
  fullName: string;
};

export async function signUp({ email, password, fullName }: SignUp) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
        address: "",
        wishlist: [],
        booking: [],
        phone: "",
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function login({ email, password }: Login) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getCurrentUser() {
  const storedSession = JSON.parse(localStorage.getItem("session") || "null");

  if (!storedSession) {
    return null;
  }

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}
