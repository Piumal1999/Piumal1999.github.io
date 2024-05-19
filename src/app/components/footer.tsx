export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-screen px-4 pb-8 pt-8">
        <div className="mt-8 border-t pt-8 border-gray-800">
          <p className="text-center text-xs/relaxed text-gray-400">
            © Piumal Rathnayake 2024. All rights reserved.
            <br />
            Created with&nbsp;
            <a
              href="https://nextjs.org/"
              className="underline transition text-white hover:text-white/75"
            >
              NextJs
            </a>
            &nbsp;and&nbsp;
            <a
              href="www.hyperui.dev"
              className="underline transition text-white hover:text-white/75"
            >
              HyperUI
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
