/**
 * Renders a name in the script face, but sets the initial in Cormorant italic
 * so it reads unmistakably as a capital (Great Vibes' "A" looks lowercase).
 */
export function ScriptName({ name }: { readonly name: string }) {
  return (
    <>
      <span className="font-serif font-medium italic">{name.charAt(0)}</span>
      {name.slice(1)}
    </>
  );
}
