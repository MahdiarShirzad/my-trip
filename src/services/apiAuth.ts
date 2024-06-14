import supabase, { supabaseUrl } from "./supabase";

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
        bookingsFlight: [],
        bookingsHotel: [],
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

export async function updateUser(updates: Partial<SignUp>, avatar: any) {
  const { data, error } = await supabase.auth.updateUser({
    data: updates,
  });

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  return { data, updatedUser };
}
