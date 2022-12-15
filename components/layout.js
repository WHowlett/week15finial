import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>Wayne Portfolio</title>
      </Head>
      <header>
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link href="/">
    <a class="navbar-brand">WH</a>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link href="/blogs/blog">
          <p class="nav-link">Blogs</p>
          </Link>
        </li>
        <li class="nav-item">
        <Link href="/project/project">
          <p class="nav-link">Project</p>
          </Link>
        </li>
        <li class="nav-item">
        <Link href="/information/info">
          <p class="nav-link">Information</p>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </header>
      <main>{children}</main>
      {!home && (
          <Link href="/">
            <p className="btn btn-primary mt-3">← Back to home</p>
          </Link>
        )
      }
      <footer className="text-center">
        <p>Created by Wayne Howlett 2022</p>
      </footer>
    </div>
  );
}