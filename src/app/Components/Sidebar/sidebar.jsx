import React from "react";
import "./sidebar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export function Sidebar({ btOn }) {
  if (btOn == "home") {
    return (
      <div className="Sidebar p-3 text-white d-flex flex-column flex-shrink-0">
        <a
          href="#"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span class="fs-4">RU - UESC</span>
        </a>
        <hr></hr>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              href="/"
              className="nav-link text-white active"
              aria-current="page"
            >
              Início
            </a>
          </li>

          <li>
            <a
              href="/login"
              className="nav-link text-white"
              aria-current="page"
            >
              Painel de Administração
            </a>
          </li>
        </ul>
      </div>
    );
  } else if (btOn == "login") {
    return (
      <div className="Sidebar p-3 text-white d-flex flex-column flex-shrink-0">
        <a
          href="#"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span class="fs-4">RU - UESC</span>
        </a>
        <hr></hr>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/" className="nav-link text-white" aria-current="page">
              Início
            </a>
          </li>

          <li>
            <a href="/login" className="nav-link active" aria-current="page">
              Painel de Administração
            </a>
          </li>
        </ul>
      </div>
    );
  } else if (btOn == "admin") {
    return (
      <div className="Sidebar p-3 text-white d-flex flex-column flex-shrink-0">
        <a
          href="#"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span class="fs-4">RU - UESC</span>
        </a>
        <hr></hr>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/" className="nav-link text-white" aria-current="page">
              Início
            </a>
          </li>

          <li>
            <a href="/admin" className="nav-link active" aria-current="page">
              Painel de Administração
            </a>
          </li>
          <li></li>
        </ul>

        <hr></hr>

        <div>
          <a href="/login" className="btn btn-danger">
            Sair
          </a>
        </div>
      </div>
    );
  }
}
