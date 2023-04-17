import { useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";

export default function Home({ token }) {
  const [accessToken, setAccessToken] = useState();
  const [idToken, setIdToken] = useState();
  const [permissions, setPermissions] = useState();
  const [permission, setPermission] = useState();
  const [organization, setOrganization] = useState();
  const [organizations, setOrganizations] = useState();
  const { user, isAuthenticated, isLoading, error } = useKindeAuth();

  const handleGetAccessToken = async () => {
    const res = await fetch("/api/getAccessToken");
    const { token } = await res.json();
    setAccessToken(token);
  };

  const handleGetIdToken = async () => {
    const res = await fetch("/api/getIdToken");
    const { token } = await res.json();
    setIdToken(token);
  };

  const handleGetPermissions = async () => {
    const res = await fetch("/api/getPermissions");
    const { permissions } = await res.json();
    setPermissions(permissions);
  };

  const handleGetPermission = async () => {
    const res = await fetch("/api/getPermission", {
      method: "post",
      body: JSON.stringify({
        permission: "test",
      }),
    });
    const { permission } = await res.json();
    setPermission(permission);
  };

  const handleGetOrganization = async () => {
    const res = await fetch("/api/getOrganization");
    const { organization } = await res.json();
    setOrganization(organization);
  };

  const handleGetOrganizations = async () => {
    const res = await fetch("/api/getOrganizations");
    const { organizations } = await res.json();
    setOrganizations(organizations);
  };

  if (isLoading) return <>loading...</>;
  if (error) return <>{error}</>;

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            {isAuthenticated ? (
              <>
                <Nav className="d-flex gap-2">
                  <Link href="/api/auth/logout">
                    <Button variant={"light"}>Logout</Button>
                  </Link>
                </Nav>
              </>
            ) : (
              <>
                <Nav className="d-flex gap-2">
                  <Link href="/api/auth/register">
                    <Button variant={"light"}>Register</Button>
                  </Link>

                  <Link
                    href={{
                      pathname: "/api/auth/login",
                      query: {},
                    }}
                  >
                    <Button variant={"dark"}>Log in</Button>
                  </Link>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="pt-5">
        {isAuthenticated ? (
          <>
            <h1>KindeAuth NextJS playground</h1>
            <p>
              Here you can see the data that gets passed around when using{" "}
              <code>@kinde-oss/kinde-auth-nextjs</code>.
            </p>
            <h2>User object</h2>
            <pre className="text-dark bg-light p-3 rounded">
              <code>{JSON.stringify(user, null, 2)}</code>
            </pre>

            <h2>Functions</h2>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <code>getAccessToken()</code>
                </Accordion.Header>
                <Accordion.Body>
                  <p>Gets the access token as a JSON object from cookies.</p>
                  <Button className="mr-2" onClick={handleGetAccessToken}>
                    Get access token
                  </Button>
                  {accessToken ? (
                    <>
                      <Button variant="light" onClick={() => setAccessToken()}>
                        Hide
                      </Button>
                      <pre className="text-dark bg-light p-3 rounded mt-3">
                        <code>{JSON.stringify(accessToken, null, 2)}</code>
                      </pre>
                    </>
                  ) : null}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <code>getIdToken()</code>
                </Accordion.Header>
                <Accordion.Body>
                  <p>Gets the id token as a JSON object from cookies.</p>
                  <Button className="mr-2" onClick={handleGetIdToken}>
                    Get id token
                  </Button>
                  {idToken ? (
                    <>
                      <Button variant="light" onClick={() => setIdToken()}>
                        Hide
                      </Button>
                      <pre className="text-dark bg-light p-3 rounded mt-3">
                        <code>{JSON.stringify(idToken, null, 2)}</code>
                      </pre>
                    </>
                  ) : null}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <code>getPermissions()</code>
                </Accordion.Header>
                <Accordion.Body>
                  <p>Gets the permissions from the access token.</p>
                  <Button className="mr-2" onClick={handleGetPermissions}>
                    Get permissions
                  </Button>
                  {permissions ? (
                    <>
                      <Button variant="light" onClick={() => setPermissions()}>
                        Hide
                      </Button>
                      <pre className="text-dark bg-light p-3 rounded mt-3">
                        <code>{JSON.stringify(permissions, null, 2)}</code>
                      </pre>
                    </>
                  ) : null}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <code>getPermission(permission: String)</code>
                </Accordion.Header>
                <Accordion.Body>
                  <p>Check if user has permission</p>
                  <Button className="mr-2" onClick={handleGetPermission}>
                    Get permission
                  </Button>
                  {permission ? (
                    <>
                      <Button variant="light" onClick={() => setPermission()}>
                        Hide
                      </Button>
                      <pre className="text-dark bg-light p-3 rounded mt-3">
                        <code>{JSON.stringify(permission, null, 2)}</code>
                      </pre>
                    </>
                  ) : null}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <code>getOrganization()</code>
                </Accordion.Header>
                <Accordion.Body>
                  <p>Gets the organization code from access token.</p>
                  <Button className="mr-2" onClick={handleGetOrganization}>
                    Get organization
                  </Button>
                  {organization ? (
                    <>
                      <Button variant="light" onClick={() => setOrganization()}>
                        Hide
                      </Button>
                      <pre className="text-dark bg-light p-3 rounded mt-3">
                        <code>{JSON.stringify(organization, null, 2)}</code>
                      </pre>
                    </>
                  ) : null}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <code>getUserOrganizations()</code>
                </Accordion.Header>
                <Accordion.Body>
                  <p>Gets organizations that this user is in.</p>
                  <Button className="mr-2" onClick={handleGetOrganizations}>
                    Get organizations
                  </Button>
                  {organizations ? (
                    <>
                      <Button
                        variant="light"
                        onClick={() => setOrganizations()}
                      >
                        Hide
                      </Button>
                      <pre className="text-dark bg-light p-3 rounded mt-3">
                        <code>{JSON.stringify(organizations, null, 2)}</code>
                      </pre>
                    </>
                  ) : null}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <code>getUserOrganizations()</code>
                </Accordion.Header>
                <Accordion.Body>
                  <p>Gets organizations that this user is in.</p>
                  <Button className="mr-2" onClick={handleGetOrganizations}>
                    Get organizations
                  </Button>
                  {organizations ? (
                    <>
                      <Button
                        variant="light"
                        onClick={() => setOrganizations()}
                      >
                        Hide
                      </Button>
                      <pre className="text-dark bg-light p-3 rounded mt-3">
                        <code>{JSON.stringify(organizations, null, 2)}</code>
                      </pre>
                    </>
                  ) : null}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </>
        ) : (
          <p>
            <Link
              href={{
                pathname: "/api/auth/login",
                query: {
                  org_code: "org_a159c71dd7d",
                },
              }}
            >
              Log in
            </Link>{" "}
            or{" "}
            <Link
              href={{
                pathname: "/api/auth/register",
                query: {
                  org_code: "org_a159c71dd7d",
                },
              }}
            >
              register
            </Link>{" "}
            to see what can be done!
          </p>
        )}
      </Container>
    </div>
  );
}
