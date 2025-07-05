export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  console.log("lol", body);

  return { updated: true };
});
