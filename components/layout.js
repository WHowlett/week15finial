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
    <a class="navbar-brand" href="/">WH</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link href="/blogs/blog">
          <a class="nav-link">Blogs</a>
          </Link>
        </li>
        <li class="nav-item">
        <Link href="/project/project">
          <a class="nav-link">Project</a>
          </Link>
        </li>
        <li class="nav-item">
        <Link href="/information/info">
          <a class="nav-link">Information</a>
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
            <a className="btn btn-primary mt-3">← Back to home</a>
          </Link>
        )
      }
      <footer className="text-center">
        <p>Created by Wayne Howlett 2022</p>
      </footer>
    </div>
  );
}