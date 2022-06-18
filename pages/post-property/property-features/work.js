






    <div className={`col-lg-8  mt-5  ${Styles.property2}`}>
    <p className={`ms-5 ${Styles.heading}`}>Property Features</p>
    <div className="container mb-3 ms-3">
      <div className="row ">
        <div className="col-lg-3 ">
          <label
            htmlFor="inputEmail4"
            className={`form-label   ${Styles.input}`}
          >
            Total floors
          </label>
          <div>
            <input
              type="text"
              className={`form-label ps-2 pe-2  pt-2 pb-2 ${Styles.placeholder}`}
              id="inputEmail4"
              placeholder="Ex : 13"
              name="TotalFloors"
              value={formik.values.TotalFloors}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.TotalFloors && formik.touched.TotalFloors && (
            <div className="d-flex align-items-center text-danger">
              <i className="ri-error-warning-line me-1  "></i>
              <span>{formik.errors.TotalFloors}</span>
            </div>
          )}
        </div>
        <div className="col-lg-3 ">
          <label
            htmlFor="inputPassword4"
            className={`form-label   ${Styles.input}`}
          >
            Floor number
          </label>
          <div>
            <input
              type="text"
              className={`form-label ps-2 pe-2  pt-2 pb-2 ${Styles.placeholder}`}
              id="inputPassword4"
              placeholder="Ex : 7"
              name="FloorNumber"
              value={formik.values.FloorNumber}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.FloorNumber && formik.touched.FloorNumber && (
            <div className="d-flex align-items-center text-danger">
              <i className="ri-error-warning-line me-1  "></i>
              <span>{formik.errors.FloorNumber}</span>
            </div>
          )}
        </div>
        <div className="col-lg-3 ">
          <label
            htmlFor="inputPassword4"
            className={`form-label ${Styles.input}`}
          >
            Car Parking Count
          </label>
          <div>
            <input
              type="text"
              className={`form-label ps-2 pe-2  pt-2 pb-2 ${Styles.placeholder}`}
              id="inputPassword4"
              placeholder="Ex : 3"
              name="CarParkingCount"
              value={formik.values.CarParkingCount}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.CarParkingCount &&
            formik.touched.CarParkingCount && (
              <div className="d-flex align-items-center text-danger">
                <i className="ri-error-warning-line me-1  "></i>
                <span>{formik.errors.CarParkingCount}</span>
              </div>
            )}
        </div>
      </div>
    </div>

    <div className="container mb-3 ms-3">
      <div className="row">
        <div className="col-lg-3 ">
          <label
            htmlFor="inputEmail4"
            className={`form-label  ${Styles.input}`}
          >
            Bedroom
          </label>
          <div>
            <input
              type="text"
              className={`form-label ps-2 pe-2  pt-2 pb-2 ${Styles.placeholder}`}
              id="inputEmail4"
              placeholder="Ex : 13"
              name="BedRoom"
              value={formik.values.BedRoom}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.BedRoom && formik.touched.BedRoom && (
            <div className="d-flex align-items-center text-danger">
              <i className="ri-error-warning-line me-1  "></i>
              <span>{formik.errors.BedRoom}</span>
            </div>
          )}
        </div>
        <div className="col-lg-3">
          <label
            htmlFor="inputPassword4"
            className={`form-label  ${Styles.input}`}
          >
            Bathroom
          </label>
          <div>
            <input
              type="text"
              className={`form-label ps-2 pe-2  pt-2 pb-2 ${Styles.placeholder}`}
              id="inputPassword4"
              placeholder="Ex : 7"
              name="BathRoom"
              value={formik.values.BathRoom}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.BathRoom && formik.touched.BathRoom && (
            <div className="d-flex align-items-center text-danger">
              <i className="ri-error-warning-line me-1  "></i>
              <span>{formik.errors.BathRoom}</span>
            </div>
          )}
        </div>
        <div className="col-lg-5 ">
          <label
            htmlFor="inputPassword4"
            className={`form-label  ${Styles.input}`}
          >
            Facing{" "}
          </label>
          <div
            onClick={() => setoptionType("facing")}
            className={
              optionType === "facing"
                ? `${Styles.bg_color_1D72DB}  d-flex flex-column  `
                : ` d-flex flex-columnn `
            }
          >
          
            <Select
              options={facing}
              type="text"
              placeholder="Select.."
              className="w-75"
              styles={customStyles}
              name="facing"
              value={facing.filter((option) => {
                return option.value === formik.values.facing;
              })}
              onChange={(selectedOption) => {
                let event = {
                  target: {
                    name: "facing",
                    value: selectedOption.value,
                  },
                };
                formik.handleChange(event);
              }}
              components={{
                IndicatorSeparator: () => null,
              }}
            />
          </div>
          {formik.errors.facing && formik.touched.facing && (
            <div className="d-flex align-items-center text-danger">
              <i className="ri-error-warning-line me-1 mt-1 "></i>
              <span> {formik.errors.facing}</span>
            </div>
          )}
        </div>
      </div>
    </div>

    <div className="container mb-5 ms-3">
      <div className="row">
        <div className="col-lg-5 ">
          <label
            htmlFor="inputPassword4"
            className={`form-label me-5 ${Styles.input}`}
          >
            Furnishing status{" "}
          </label>

          <div
            onClick={() => setoptionType("furnishedStatus")}
            className={
              optionType === "furnishedStatus"
                ? `${Styles.bg_color_1D72DB}  d-flex flex-column  `
                : ` d-flex flex-columnn `
            }
          >
           
            <Select
              options={furnishingStatus}
              type="text"
              placeholder="Select.."
              className="w-100"
              styles={customStyles}
              name="FurnishedStatus"
              value={furnishingStatus.filter((option) => {
                return (
                  option.value === formik.values.FurnishedStatus
                );
              })}
              onChange={(selectedOption) => {
                let event = {
                  target: {
                    name: "FurnishedStatus",
                    value: selectedOption.value,
                  },
                };
                formik.handleChange(event);
              }}
              components={{
                IndicatorSeparator: () => null,
              }}
            />
          </div>
        </div>
        {formik.errors.FurnishedStatus &&
          formik.touched.FurnishedStatus && (
            <div className="d-flex align-items-center text-danger">
              <i className="ri-error-warning-line me-1  "></i>
              <span>{formik.errors.FurnishedStatus}</span>
            </div>
          )}
        <p className={`mt-5   ${Styles.checkheading}`}>Amenities</p>
        <div>
          <div className="container mb-2 ms-2 ">
            <div className="row ">
              <div className="col-lg-4 ">
                <div className="form-check">
                  <input
                    className="form-check-input mt-2"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className={`form-check-label  ${Styles.checkcontent}`}
                    htmlFor="flexCheckChecked"
                  >
                    Elevators/Lifts
                  </label>
                </div>
              </div>
              <div className="col-lg-5 ">
                <div className="form-check">
                  <input
                    className="form-check-input mt-2"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className={`form-check-label ${Styles.checkcontent}`}
                    htmlFor="flexCheckDefault"
                  >
                    Guest Parking Spaces
                  </label>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className="form-check">
                  <input
                    className="form-check-input mt-2"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className={`form-check-label ${Styles.checkcontent}`}
                    htmlFor="flexCheckChecked"
                  >
                    Gym
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="container mb-2 ms-2">
            <div className="row ">
              <div className="col-lg-4 ">
                <div className="form-check">
                  <input
                    className="form-check-input mt-2"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className={`form-check-label ${Styles.checkcontent}`}
                    htmlFor="flexCheckChecked"
                  >
                    CCTV Surveillance
                  </label>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="form-check">
                  <input
                    className="form-check-input mt-2"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className={`form-check-label ${Styles.checkcontent}`}
                    htmlFor="flexCheckDefault"
                  >
                    Guest Parking Spaces
                  </label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-check">
                  <input
                    className="form-check-input mt-2"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className={`form-check-label ${Styles.checkcontent}`}
                    htmlFor="flexCheckChecked"
                  >
                    Gym
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="container mb-2 ms-2">
            <div className="row ">
              <div className="col-lg-3 ">
                <div className="form-check">
                  <input
                    className="form-check-input mt-2"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className={`form-check-label ${Styles.checkcontent}`}
                    htmlFor="flexCheckChecked"
                  >
                    Kids Play Area
                  </label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-check">
                  <input
                    className="form-check-input mt-2"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className={`form-check-label ${Styles.checkcontent}`}
                    htmlFor="flexCheckDefault"
                  >
                    Swimming Pool
                  </label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-check">
                  <input
                    className="form-check-input mt-2"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className={`form-check-label ${Styles.checkcontent}`}
                    htmlFor="flexCheckChecked"
                  >
                    Play Ground
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="container mb-2 ms-2">
            <div className="row ">
              <div className="col-lg-5">
                <div className="form-check">
                  <input
                    className="form-check-input mt-2"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className={`form-check-label ${Styles.checkcontent}`}
                    htmlFor="flexCheckChecked"
                  >
                    Pet Washing Stations
                  </label>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="form-check">
                  <input
                    className="form-check-input mt-2"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className={`form-check-label ${Styles.checkcontent}`}
                    htmlFor="flexCheckDefault"
                  >
                    Rooftop Lounge Areas
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="container  ms-2">
            <div className="row">
              <div className="col-lg-7">
                <div className="form-check">
                  <input
                    className="form-check-input mt-2"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className={`form-check-label ${Styles.checkcontent}`}
                    htmlFor="flexCheckChecked"
                  >
                    Electronic Vehicle Charging Points
                  </label>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="form-check">
                  <input
                    className="form-check-input mt-2"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className={`form-check-label ${Styles.checkcontent}`}
                    htmlFor="flexCheckDefault"
                  >
                    Barbecue Areas
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`ms-auto w-50 ${Styles.buttoncontainer}`}>
          <div className="d-flex ">
            <div className="d-flex mt-5 ms-2">
              <div className="me-3 mt-1">
                <Image
                  src={Image1}
                  alt="Picture of the author"
                  className={` ${Styles.buttonicon}`}
                  width={15}
                  height={15}
                />
              </div>

              <label
                className={`form-check-label mt-1  ${Styles.backbutton}`}
                htmlFor="inlineFormCheck"
                onClick={() => router.replace("/auth/property")}
              >
                Back
              </label>
            </div>
            <div className="mt-5 ms-3">
              <button
                type="submit"
                className={`me-5   ${Styles.button}`}
              >
                Next
                <span className="ms-5 ">
                  <Image
                    src={Image2}
                    alt="Picture of the author"
                    className={`${Styles.widthimg}`}
                    width={15}
                    height={15}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  </div>
</div>
</div>
</div>