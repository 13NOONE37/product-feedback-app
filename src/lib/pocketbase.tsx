import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.POCKETBASE_URL);

export async function authenticatePocketBase() {
  if (!pb.authStore.isValid) {
    await pb.admins.authWithPassword(
      process.env.POCKETBASE_ADMIN_EMAIL!,
      process.env.POCKETBASE_ADMIN_PASSWORD!,
    );
  }
  return pb;
}
