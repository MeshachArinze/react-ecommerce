import React from 'react'

const List = () => {
  return (
    <>
      <div className="text-lightCream">
        <ul className="flex flex-col ">
          <li>
            <a className="text-lightGray hover: pointer" href="#solution">
              Solutions
            </a>
          </li>
          <li>
            <a href="#analytics" className="text-lightGray">
              Analytics
            </a>
          </li>
          <li>
            <a className="text-lightGray" href="#commerce">
              Commerce
            </a>
          </li>
          <li className="text-lightGray">
            <a href="#insights">Insights</a>
          </li>
        </ul>
      </div>
      <div className="text-lightCream">
        <ul className="list-style-none flex flex-col">
          <li>
            <a href="#support" className="text-lightGray">
              Support
            </a>
          </li>
          <li>
            <a href="#princing" className="text-lightGray">
              Princing
            </a>
          </li>
          <li>
            <a href="#documentation" className="text-lightGray">
              Documentation
            </a>
          </li>
          <li>
            <a href="#guildes" className="text-lightGray">
              Guildes
            </a>
          </li>
        </ul>
      </div>
      <div className="text-lightCream">
        <ul className="list-style-none flex flex-col">
          <li>
            <a href="#company" className="text-lightGray">
              Company
            </a>
          </li>
          <li className="text-lightGray">
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a className="text-lightGray" href="#job">
              Job
            </a>
          </li>
          <li>
            <a href="#press" className="text-lightGray">
              Press
            </a>
          </li>
        </ul>
      </div>
      <div className="text-lightCream">
        <ul className="list-style-none flex flex-col">
          <li>
            <a href="#legal" className="text-lightGray">
              Legal
            </a>
          </li>
          <li>
            <a href="#claim" className="text-lightGray">
              Claim
            </a>
          </li>
          <li>
            <a href="#privacy" className="text-lightGray">
              Privacy
            </a>
          </li>
          <li>
            <a href="#terms" className="text-lightGray">
              Terms
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default List