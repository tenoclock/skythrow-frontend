import React from "react";

import i1 from "../../assets/images/event-01-370x225.jpg";
import i2 from "../../assets/images/event-02-370x225.jpg";
import i3 from "../../assets/images/event-03-370x225.jpg";

class Events extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default">
        <div className="container">
          <div className="section-title-box text-center">
            <h3>Upcoming Events</h3>
            <div className="section-title">Events</div>
          </div>
          <div className="row row-50">
            <div className="col-lg-4 col-sm-6">
              <article className="event">
                <figure className="event-figure">
                  <a href="#">
                    <img src={i1} alt width={370} height={225} />
                  </a>
                </figure>
                <div className="h5 event-time">
                  <time dateTime={2020}>September 07</time>
                </div>
                <h5 className="event-title">
                  <a href="#">Jumpers — Lakers</a>
                </h5>
                <div className="event-details">
                  <div className="event-details-icon">
                    <svg
                      className="svg-icon"
                      width={12}
                      height={15}
                      viewBox="0 0 12 15"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M6 14.4375C6.0638 14.4375 6.11849 14.4238 6.16406 14.3965C6.21875 14.3783 6.26432 14.3464 6.30078 14.3008C6.35547 14.2461 6.64258 13.9408 7.16211 13.3848C7.69076 12.8197 8.25586 12.1315 8.85742 11.3203C9.45898 10.5091 10.0059 9.63867 10.498 8.70898C10.9993 7.77018 11.25 6.90885 11.25 6.125C11.25 5.30469 11.0951 4.57096 10.7852 3.92383C10.4844 3.27669 10.0879 2.72982 9.5957 2.2832C9.10352 1.82747 8.54297 1.48112 7.91406 1.24414C7.28516 0.998047 6.64714 0.875 6 0.875C5.35286 0.875 4.71484 0.99349 4.08594 1.23047C3.46615 1.46745 2.9056 1.8138 2.4043 2.26953C1.91211 2.71615 1.51107 3.26758 1.20117 3.92383C0.900391 4.57096 0.75 5.30469 0.75 6.125C0.75 6.89974 0.996094 7.75195 1.48828 8.68164C1.98958 9.61133 2.54102 10.4863 3.14258 11.3066C3.74414 12.1178 4.30469 12.806 4.82422 13.3711C5.35286 13.9362 5.64453 14.2461 5.69922 14.3008C5.73568 14.3464 5.77669 14.3783 5.82227 14.3965C5.87695 14.4238 5.9362 14.4375 6 14.4375ZM6 1.75C6.53776 1.75 7.06641 1.85026 7.58594 2.05078C8.10547 2.2513 8.57031 2.54297 8.98047 2.92578C9.39974 3.29948 9.73698 3.75977 9.99219 4.30664C10.2474 4.8444 10.375 5.45052 10.375 6.125C10.375 6.71745 10.1973 7.3737 9.8418 8.09375C9.48633 8.8138 9.06706 9.51562 8.58398 10.1992C8.10091 10.8828 7.61328 11.5072 7.12109 12.0723C6.63802 12.6374 6.26432 13.0612 6 13.3438C5.73568 13.0703 5.35742 12.651 4.86523 12.0859C4.38216 11.5208 3.89909 10.8965 3.41602 10.2129C2.93294 9.5293 2.51367 8.82747 2.1582 8.10742C1.80273 7.37826 1.625 6.71745 1.625 6.125C1.625 5.45052 1.7526 4.8444 2.00781 4.30664C2.26302 3.75977 2.5957 3.29948 3.00586 2.92578C3.41602 2.54297 3.88086 2.2513 4.40039 2.05078C4.92904 1.85026 5.46224 1.75 6 1.75ZM7.75 6.125C7.75 5.64193 7.57682 5.23177 7.23047 4.89453C6.89323 4.54818 6.48307 4.375 6 4.375C5.51693 4.375 5.10221 4.54818 4.75586 4.89453C4.41862 5.23177 4.25 5.64193 4.25 6.125C4.25 6.60807 4.41862 7.02279 4.75586 7.36914C5.10221 7.70638 5.51693 7.875 6 7.875C6.48307 7.875 6.89323 7.70638 7.23047 7.36914C7.57682 7.02279 7.75 6.60807 7.75 6.125ZM5.125 6.125C5.125 5.88802 5.21159 5.68294 5.38477 5.50977C5.55794 5.33659 5.76302 5.25 6 5.25C6.23698 5.25 6.44206 5.33659 6.61523 5.50977C6.78841 5.68294 6.875 5.88802 6.875 6.125C6.875 6.36198 6.78841 6.56706 6.61523 6.74023C6.44206 6.91341 6.23698 7 6 7C5.76302 7 5.55794 6.91341 5.38477 6.74023C5.21159 6.56706 5.125 6.36198 5.125 6.125Z" />
                    </svg>
                  </div>
                  <div className="event-details-text">
                    <p>Sports Hall, New York, NY</p>
                  </div>
                </div>
                <div className="event-details">
                  <div className="event-details-icon">
                    <svg
                      className="svg-icon"
                      width={14}
                      height={15}
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M13.5625 2.1875H10.9375V1.3125C10.9375 1.19401 10.8919 1.09375 10.8008 1.01172C10.7188 0.920573 10.6185 0.875 10.5 0.875C10.3815 0.875 10.2767 0.920573 10.1855 1.01172C10.1035 1.09375 10.0625 1.19401 10.0625 1.3125V2.1875H7.4375V1.3125C7.4375 1.19401 7.39193 1.09375 7.30078 1.01172C7.21875 0.920573 7.11849 0.875 7 0.875C6.88151 0.875 6.77669 0.920573 6.68555 1.01172C6.60352 1.09375 6.5625 1.19401 6.5625 1.3125V2.1875H3.9375V1.3125C3.9375 1.19401 3.89193 1.09375 3.80078 1.01172C3.71875 0.920573 3.61849 0.875 3.5 0.875C3.38151 0.875 3.27669 0.920573 3.18555 1.01172C3.10352 1.09375 3.0625 1.19401 3.0625 1.3125V2.1875H0.4375C0.31901 2.1875 0.214193 2.23307 0.123047 2.32422C0.0410156 2.40625 0 2.50651 0 2.625V14.4375C0 14.556 0.0410156 14.6562 0.123047 14.7383C0.214193 14.8294 0.31901 14.875 0.4375 14.875H13.5625C13.681 14.875 13.7812 14.8294 13.8633 14.7383C13.9544 14.6562 14 14.556 14 14.4375V2.625C14 2.50651 13.9544 2.40625 13.8633 2.32422C13.7812 2.23307 13.681 2.1875 13.5625 2.1875ZM3.0625 3.0625V3.9375C3.0625 4.05599 3.10352 4.16081 3.18555 4.25195C3.27669 4.33398 3.38151 4.375 3.5 4.375C3.61849 4.375 3.71875 4.33398 3.80078 4.25195C3.89193 4.16081 3.9375 4.05599 3.9375 3.9375V3.0625H6.5625V3.9375C6.5625 4.05599 6.60352 4.16081 6.68555 4.25195C6.77669 4.33398 6.88151 4.375 7 4.375C7.11849 4.375 7.21875 4.33398 7.30078 4.25195C7.39193 4.16081 7.4375 4.05599 7.4375 3.9375V3.0625H10.0625V3.9375C10.0625 4.05599 10.1035 4.16081 10.1855 4.25195C10.2767 4.33398 10.3815 4.375 10.5 4.375C10.6185 4.375 10.7188 4.33398 10.8008 4.25195C10.8919 4.16081 10.9375 4.05599 10.9375 3.9375V3.0625H13.125V5.25H0.875V3.0625H3.0625ZM0.875 14V6.125H13.125V14H0.875ZM9.31055 7.99805L6.125 11.1973L4.68945 9.74805C4.59831 9.66602 4.49349 9.625 4.375 9.625C4.25651 9.625 4.15169 9.66602 4.06055 9.74805C3.97852 9.83919 3.9375 9.94401 3.9375 10.0625C3.9375 10.181 3.97852 10.2858 4.06055 10.377L5.81055 12.127C5.85612 12.1634 5.90625 12.1953 5.96094 12.2227C6.01562 12.2409 6.07031 12.25 6.125 12.25C6.17969 12.25 6.23438 12.2409 6.28906 12.2227C6.34375 12.1953 6.39388 12.1634 6.43945 12.127L9.93945 8.62695C10.0215 8.53581 10.0625 8.43099 10.0625 8.3125C10.0625 8.19401 10.0215 8.08919 9.93945 7.99805C9.84831 7.91602 9.74349 7.875 9.625 7.875C9.50651 7.875 9.40169 7.91602 9.31055 7.99805Z" />
                    </svg>
                  </div>
                  <div className="event-details-text">
                    <p>Tuesday, 8:00 am, Wednesday, 5:00 pm</p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6">
              <article className="event">
                <figure className="event-figure">
                  <a href="#">
                    <img src={i2} alt width={370} height={225} />
                  </a>
                </figure>
                <div className="h5 event-time">
                  <time dateTime={2020}>September 12</time>
                </div>
                <h5 className="event-title">
                  <a href="#">BULLS — New Yorkers</a>
                </h5>
                <div className="event-details">
                  <div className="event-details-icon">
                    <svg
                      className="svg-icon"
                      width={12}
                      height={15}
                      viewBox="0 0 12 15"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M6 14.4375C6.0638 14.4375 6.11849 14.4238 6.16406 14.3965C6.21875 14.3783 6.26432 14.3464 6.30078 14.3008C6.35547 14.2461 6.64258 13.9408 7.16211 13.3848C7.69076 12.8197 8.25586 12.1315 8.85742 11.3203C9.45898 10.5091 10.0059 9.63867 10.498 8.70898C10.9993 7.77018 11.25 6.90885 11.25 6.125C11.25 5.30469 11.0951 4.57096 10.7852 3.92383C10.4844 3.27669 10.0879 2.72982 9.5957 2.2832C9.10352 1.82747 8.54297 1.48112 7.91406 1.24414C7.28516 0.998047 6.64714 0.875 6 0.875C5.35286 0.875 4.71484 0.99349 4.08594 1.23047C3.46615 1.46745 2.9056 1.8138 2.4043 2.26953C1.91211 2.71615 1.51107 3.26758 1.20117 3.92383C0.900391 4.57096 0.75 5.30469 0.75 6.125C0.75 6.89974 0.996094 7.75195 1.48828 8.68164C1.98958 9.61133 2.54102 10.4863 3.14258 11.3066C3.74414 12.1178 4.30469 12.806 4.82422 13.3711C5.35286 13.9362 5.64453 14.2461 5.69922 14.3008C5.73568 14.3464 5.77669 14.3783 5.82227 14.3965C5.87695 14.4238 5.9362 14.4375 6 14.4375ZM6 1.75C6.53776 1.75 7.06641 1.85026 7.58594 2.05078C8.10547 2.2513 8.57031 2.54297 8.98047 2.92578C9.39974 3.29948 9.73698 3.75977 9.99219 4.30664C10.2474 4.8444 10.375 5.45052 10.375 6.125C10.375 6.71745 10.1973 7.3737 9.8418 8.09375C9.48633 8.8138 9.06706 9.51562 8.58398 10.1992C8.10091 10.8828 7.61328 11.5072 7.12109 12.0723C6.63802 12.6374 6.26432 13.0612 6 13.3438C5.73568 13.0703 5.35742 12.651 4.86523 12.0859C4.38216 11.5208 3.89909 10.8965 3.41602 10.2129C2.93294 9.5293 2.51367 8.82747 2.1582 8.10742C1.80273 7.37826 1.625 6.71745 1.625 6.125C1.625 5.45052 1.7526 4.8444 2.00781 4.30664C2.26302 3.75977 2.5957 3.29948 3.00586 2.92578C3.41602 2.54297 3.88086 2.2513 4.40039 2.05078C4.92904 1.85026 5.46224 1.75 6 1.75ZM7.75 6.125C7.75 5.64193 7.57682 5.23177 7.23047 4.89453C6.89323 4.54818 6.48307 4.375 6 4.375C5.51693 4.375 5.10221 4.54818 4.75586 4.89453C4.41862 5.23177 4.25 5.64193 4.25 6.125C4.25 6.60807 4.41862 7.02279 4.75586 7.36914C5.10221 7.70638 5.51693 7.875 6 7.875C6.48307 7.875 6.89323 7.70638 7.23047 7.36914C7.57682 7.02279 7.75 6.60807 7.75 6.125ZM5.125 6.125C5.125 5.88802 5.21159 5.68294 5.38477 5.50977C5.55794 5.33659 5.76302 5.25 6 5.25C6.23698 5.25 6.44206 5.33659 6.61523 5.50977C6.78841 5.68294 6.875 5.88802 6.875 6.125C6.875 6.36198 6.78841 6.56706 6.61523 6.74023C6.44206 6.91341 6.23698 7 6 7C5.76302 7 5.55794 6.91341 5.38477 6.74023C5.21159 6.56706 5.125 6.36198 5.125 6.125Z" />
                    </svg>
                  </div>
                  <div className="event-details-text">
                    <p>Sports Hall, New York, NY</p>
                  </div>
                </div>
                <div className="event-details">
                  <div className="event-details-icon">
                    <svg
                      className="svg-icon"
                      width={14}
                      height={15}
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M13.5625 2.1875H10.9375V1.3125C10.9375 1.19401 10.8919 1.09375 10.8008 1.01172C10.7188 0.920573 10.6185 0.875 10.5 0.875C10.3815 0.875 10.2767 0.920573 10.1855 1.01172C10.1035 1.09375 10.0625 1.19401 10.0625 1.3125V2.1875H7.4375V1.3125C7.4375 1.19401 7.39193 1.09375 7.30078 1.01172C7.21875 0.920573 7.11849 0.875 7 0.875C6.88151 0.875 6.77669 0.920573 6.68555 1.01172C6.60352 1.09375 6.5625 1.19401 6.5625 1.3125V2.1875H3.9375V1.3125C3.9375 1.19401 3.89193 1.09375 3.80078 1.01172C3.71875 0.920573 3.61849 0.875 3.5 0.875C3.38151 0.875 3.27669 0.920573 3.18555 1.01172C3.10352 1.09375 3.0625 1.19401 3.0625 1.3125V2.1875H0.4375C0.31901 2.1875 0.214193 2.23307 0.123047 2.32422C0.0410156 2.40625 0 2.50651 0 2.625V14.4375C0 14.556 0.0410156 14.6562 0.123047 14.7383C0.214193 14.8294 0.31901 14.875 0.4375 14.875H13.5625C13.681 14.875 13.7812 14.8294 13.8633 14.7383C13.9544 14.6562 14 14.556 14 14.4375V2.625C14 2.50651 13.9544 2.40625 13.8633 2.32422C13.7812 2.23307 13.681 2.1875 13.5625 2.1875ZM3.0625 3.0625V3.9375C3.0625 4.05599 3.10352 4.16081 3.18555 4.25195C3.27669 4.33398 3.38151 4.375 3.5 4.375C3.61849 4.375 3.71875 4.33398 3.80078 4.25195C3.89193 4.16081 3.9375 4.05599 3.9375 3.9375V3.0625H6.5625V3.9375C6.5625 4.05599 6.60352 4.16081 6.68555 4.25195C6.77669 4.33398 6.88151 4.375 7 4.375C7.11849 4.375 7.21875 4.33398 7.30078 4.25195C7.39193 4.16081 7.4375 4.05599 7.4375 3.9375V3.0625H10.0625V3.9375C10.0625 4.05599 10.1035 4.16081 10.1855 4.25195C10.2767 4.33398 10.3815 4.375 10.5 4.375C10.6185 4.375 10.7188 4.33398 10.8008 4.25195C10.8919 4.16081 10.9375 4.05599 10.9375 3.9375V3.0625H13.125V5.25H0.875V3.0625H3.0625ZM0.875 14V6.125H13.125V14H0.875ZM9.31055 7.99805L6.125 11.1973L4.68945 9.74805C4.59831 9.66602 4.49349 9.625 4.375 9.625C4.25651 9.625 4.15169 9.66602 4.06055 9.74805C3.97852 9.83919 3.9375 9.94401 3.9375 10.0625C3.9375 10.181 3.97852 10.2858 4.06055 10.377L5.81055 12.127C5.85612 12.1634 5.90625 12.1953 5.96094 12.2227C6.01562 12.2409 6.07031 12.25 6.125 12.25C6.17969 12.25 6.23438 12.2409 6.28906 12.2227C6.34375 12.1953 6.39388 12.1634 6.43945 12.127L9.93945 8.62695C10.0215 8.53581 10.0625 8.43099 10.0625 8.3125C10.0625 8.19401 10.0215 8.08919 9.93945 7.99805C9.84831 7.91602 9.74349 7.875 9.625 7.875C9.50651 7.875 9.40169 7.91602 9.31055 7.99805Z" />
                    </svg>
                  </div>
                  <div className="event-details-text">
                    <p>Tuesday, 8:00 am, Wednesday, 5:00 pm</p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6">
              <article className="event">
                <figure className="event-figure">
                  <a href="#">
                    <img src={i3} alt width={370} height={225} />
                  </a>
                </figure>
                <div className="h5 event-time">
                  <time dateTime={2020}>october 05</time>
                </div>
                <h5 className="event-title">
                  <a href="#">Big Slam — Oklahoma</a>
                </h5>
                <div className="event-details">
                  <div className="event-details-icon">
                    <svg
                      className="svg-icon"
                      width={12}
                      height={15}
                      viewBox="0 0 12 15"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M6 14.4375C6.0638 14.4375 6.11849 14.4238 6.16406 14.3965C6.21875 14.3783 6.26432 14.3464 6.30078 14.3008C6.35547 14.2461 6.64258 13.9408 7.16211 13.3848C7.69076 12.8197 8.25586 12.1315 8.85742 11.3203C9.45898 10.5091 10.0059 9.63867 10.498 8.70898C10.9993 7.77018 11.25 6.90885 11.25 6.125C11.25 5.30469 11.0951 4.57096 10.7852 3.92383C10.4844 3.27669 10.0879 2.72982 9.5957 2.2832C9.10352 1.82747 8.54297 1.48112 7.91406 1.24414C7.28516 0.998047 6.64714 0.875 6 0.875C5.35286 0.875 4.71484 0.99349 4.08594 1.23047C3.46615 1.46745 2.9056 1.8138 2.4043 2.26953C1.91211 2.71615 1.51107 3.26758 1.20117 3.92383C0.900391 4.57096 0.75 5.30469 0.75 6.125C0.75 6.89974 0.996094 7.75195 1.48828 8.68164C1.98958 9.61133 2.54102 10.4863 3.14258 11.3066C3.74414 12.1178 4.30469 12.806 4.82422 13.3711C5.35286 13.9362 5.64453 14.2461 5.69922 14.3008C5.73568 14.3464 5.77669 14.3783 5.82227 14.3965C5.87695 14.4238 5.9362 14.4375 6 14.4375ZM6 1.75C6.53776 1.75 7.06641 1.85026 7.58594 2.05078C8.10547 2.2513 8.57031 2.54297 8.98047 2.92578C9.39974 3.29948 9.73698 3.75977 9.99219 4.30664C10.2474 4.8444 10.375 5.45052 10.375 6.125C10.375 6.71745 10.1973 7.3737 9.8418 8.09375C9.48633 8.8138 9.06706 9.51562 8.58398 10.1992C8.10091 10.8828 7.61328 11.5072 7.12109 12.0723C6.63802 12.6374 6.26432 13.0612 6 13.3438C5.73568 13.0703 5.35742 12.651 4.86523 12.0859C4.38216 11.5208 3.89909 10.8965 3.41602 10.2129C2.93294 9.5293 2.51367 8.82747 2.1582 8.10742C1.80273 7.37826 1.625 6.71745 1.625 6.125C1.625 5.45052 1.7526 4.8444 2.00781 4.30664C2.26302 3.75977 2.5957 3.29948 3.00586 2.92578C3.41602 2.54297 3.88086 2.2513 4.40039 2.05078C4.92904 1.85026 5.46224 1.75 6 1.75ZM7.75 6.125C7.75 5.64193 7.57682 5.23177 7.23047 4.89453C6.89323 4.54818 6.48307 4.375 6 4.375C5.51693 4.375 5.10221 4.54818 4.75586 4.89453C4.41862 5.23177 4.25 5.64193 4.25 6.125C4.25 6.60807 4.41862 7.02279 4.75586 7.36914C5.10221 7.70638 5.51693 7.875 6 7.875C6.48307 7.875 6.89323 7.70638 7.23047 7.36914C7.57682 7.02279 7.75 6.60807 7.75 6.125ZM5.125 6.125C5.125 5.88802 5.21159 5.68294 5.38477 5.50977C5.55794 5.33659 5.76302 5.25 6 5.25C6.23698 5.25 6.44206 5.33659 6.61523 5.50977C6.78841 5.68294 6.875 5.88802 6.875 6.125C6.875 6.36198 6.78841 6.56706 6.61523 6.74023C6.44206 6.91341 6.23698 7 6 7C5.76302 7 5.55794 6.91341 5.38477 6.74023C5.21159 6.56706 5.125 6.36198 5.125 6.125Z" />
                    </svg>
                  </div>
                  <div className="event-details-text">
                    <p>Houston House, Dallas, TX</p>
                  </div>
                </div>
                <div className="event-details">
                  <div className="event-details-icon">
                    <svg
                      className="svg-icon"
                      width={14}
                      height={15}
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M13.5625 2.1875H10.9375V1.3125C10.9375 1.19401 10.8919 1.09375 10.8008 1.01172C10.7188 0.920573 10.6185 0.875 10.5 0.875C10.3815 0.875 10.2767 0.920573 10.1855 1.01172C10.1035 1.09375 10.0625 1.19401 10.0625 1.3125V2.1875H7.4375V1.3125C7.4375 1.19401 7.39193 1.09375 7.30078 1.01172C7.21875 0.920573 7.11849 0.875 7 0.875C6.88151 0.875 6.77669 0.920573 6.68555 1.01172C6.60352 1.09375 6.5625 1.19401 6.5625 1.3125V2.1875H3.9375V1.3125C3.9375 1.19401 3.89193 1.09375 3.80078 1.01172C3.71875 0.920573 3.61849 0.875 3.5 0.875C3.38151 0.875 3.27669 0.920573 3.18555 1.01172C3.10352 1.09375 3.0625 1.19401 3.0625 1.3125V2.1875H0.4375C0.31901 2.1875 0.214193 2.23307 0.123047 2.32422C0.0410156 2.40625 0 2.50651 0 2.625V14.4375C0 14.556 0.0410156 14.6562 0.123047 14.7383C0.214193 14.8294 0.31901 14.875 0.4375 14.875H13.5625C13.681 14.875 13.7812 14.8294 13.8633 14.7383C13.9544 14.6562 14 14.556 14 14.4375V2.625C14 2.50651 13.9544 2.40625 13.8633 2.32422C13.7812 2.23307 13.681 2.1875 13.5625 2.1875ZM3.0625 3.0625V3.9375C3.0625 4.05599 3.10352 4.16081 3.18555 4.25195C3.27669 4.33398 3.38151 4.375 3.5 4.375C3.61849 4.375 3.71875 4.33398 3.80078 4.25195C3.89193 4.16081 3.9375 4.05599 3.9375 3.9375V3.0625H6.5625V3.9375C6.5625 4.05599 6.60352 4.16081 6.68555 4.25195C6.77669 4.33398 6.88151 4.375 7 4.375C7.11849 4.375 7.21875 4.33398 7.30078 4.25195C7.39193 4.16081 7.4375 4.05599 7.4375 3.9375V3.0625H10.0625V3.9375C10.0625 4.05599 10.1035 4.16081 10.1855 4.25195C10.2767 4.33398 10.3815 4.375 10.5 4.375C10.6185 4.375 10.7188 4.33398 10.8008 4.25195C10.8919 4.16081 10.9375 4.05599 10.9375 3.9375V3.0625H13.125V5.25H0.875V3.0625H3.0625ZM0.875 14V6.125H13.125V14H0.875ZM9.31055 7.99805L6.125 11.1973L4.68945 9.74805C4.59831 9.66602 4.49349 9.625 4.375 9.625C4.25651 9.625 4.15169 9.66602 4.06055 9.74805C3.97852 9.83919 3.9375 9.94401 3.9375 10.0625C3.9375 10.181 3.97852 10.2858 4.06055 10.377L5.81055 12.127C5.85612 12.1634 5.90625 12.1953 5.96094 12.2227C6.01562 12.2409 6.07031 12.25 6.125 12.25C6.17969 12.25 6.23438 12.2409 6.28906 12.2227C6.34375 12.1953 6.39388 12.1634 6.43945 12.127L9.93945 8.62695C10.0215 8.53581 10.0625 8.43099 10.0625 8.3125C10.0625 8.19401 10.0215 8.08919 9.93945 7.99805C9.84831 7.91602 9.74349 7.875 9.625 7.875C9.50651 7.875 9.40169 7.91602 9.31055 7.99805Z" />
                    </svg>
                  </div>
                  <div className="event-details-text">
                    <p>Tuesday, 8:00 am, Wednesday, 5:00 pm</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Events;