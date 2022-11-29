import React from "react";

const DevoloperContact = () => {
  return (
    <div className="flex justify-between m-6 max-w-4xl mx-auto items-center bg-red-500 p-6">
      <div className="flex flex-col items-center">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AvQMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgMEBQAGB//EAD0QAAEDAgQCCAMGBAYDAAAAAAEAAgMEEQUSITFBUQYTIjJhcYGRFCNCFZKhsdHhM0NSwVNigpOy8CQ0cv/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAvEQACAgEDAwIFBAEFAAAAAAAAAQIRAwQhMRITQTJRFCJCYXEFgZHB8FKhsdHh/9oADAMBAAIRAxEAPwD5YF7CPNYwVEhTAKoTCECCqEEIAYJgghMYUDQ2XxHuihhy34j3QNM7L4j3Q1RV/YBFhugdnIKQ0bQ7e/oLo5CwyxFlt7n+oW/JDiCkK4N+kn1Qy790dlbbV2vkikFv2EtzspKQCAgYCkMQhACEIoBAskcYyYghMBkxHKiQpgMNkwCEAFMYQhDJA8cLpiphD22+q/gUFO2cX6aZ7+JSGk0LqeCCwEFAySHfdo13dshDslc1hJzTx/6W6fki15Fdb0RuaPpcDbnol+DVNsjPmEhoQoGcgBSkMUoAVAEQWJxjBUIYKhBTAKZIQEwCE0IKYxkFBAvsiwJ2tkto38FW74JuK8hs9oyuabHjqi2gXS0Jlc46N1U2aJr3O6mQ/QUUV1IQtINigpbk0LSYxlAJza3ICPA00pbljZhMYaCAcwA7qVpDe29f7kNnlukl+Ysh7jjT3InNdrc+tjqkyyIiyQxSgBXIAS6BgQBGFkjjGBTsAgosVBummKhgqTFTCCqEEIAYJghgmMLRqEDJxY6Fh/3EJkvYDgRqGkeT7ptFJeBTtsfUpFJAy+CCwWsgpEzXOjpw5ri0mQi4Nr6BC4F9RO1880ef6QLG1hf2SqypdPBC6MAAl17i/eCGEWlsQPjI+pnhqk1RaZGdP2QUBAClACFIYEAVuuYNC4X81yd2N1Zz9uXsKZmE98e6l5VfJaxP2AalgHfHujvIO0yD4+TgxvusfiZ+xr2Ij/HSj+W33V9/J7E9mAW4hKTYxst5p/E5I8oXw8H5LUVWx/eIb6raGpT52MpadomFRF/iN91p34+5PakOyeJxsJGknxVrLB8Ml45rlEzO0dFrRBOBJbQC3+lOxbMWzxr2fSyCtgFx4pFJIUnwQWBA0XcLidMZcsj25QD2CP7+ScVZnldDNhqC8mPMbaglwvt+alO+Crit3/ZF8PPK0P01N+8B/bwVdLfA4zhyitLmZIWvzZhoe0oa33NU7OAaYybu8rpqqHuQEpFCFIYCgBSgDI6tr7uO5K8WS3bK6q2A6IBhOnqE1shqVshzeAUuX2NAOOoUWA1+K6Y7qxDMPaSn6QEzWO11jdOwD1g4tb7Klk+wUTQSta8HKL+CtSTp+xLT4NvD5GvysIOa17cxzC9TBNONPk4M0Gna4Lzsh7zXkey2ozSdidm3cdfz/ZDorf3AQbbFLYsUh1timFnZXf0n2QNMu4TI5hmyNabgXu8DmnF1ZnkSdBZWPjJaWRg7ayDkognE0cLQkda9rAzJH6u8/wBVSlsKOJJUVZndZI6Q5Rm1tdS9zZKhOsAYW2v5pp0imiM+QCQxCkMUoACAMmMjL6rxWN8jPPYsgXkqfUoNkB3BIYw2XTHgQzN0p+kBHjVYMYiQEjN1URM18EkbLP1chIMfzIyNfAt8je/ou/SyudPxv/2jm1C+W/fb/wBN/rmEZSbDyXp9Wxw9D5OdLG4O7W5B7ql0xxTAZGBpyuF/EFS4l0xG1Qjc8ZQ5ptYDh7qougcLGFeALGIeKfULtsjppomGXrWghxu0Ft7Ii1vZqopiOktKcoZkvp2B+iiymvl2I3EEgtuOfBItClBQhQAEhiHdAxSgBUgMbO0bg+i8Vs0phErADoUkwpkQ3SLDa6EmBx0NuSvqcdkIMbu2PNJzb2YzpD9KUluNcEakQzFcRM0cG7FWX5XObkcCGC5XVpNsjlVqmYahXCky6cWpebvQLoWrxmbwTB9r03N/3U/jMQdiR32tSni/2R8ZiH2JC/adMeLvZHxmIXYmd9pU/N/3U/jMQdiZYp521EZkjvlDspJHFa48sciuJMoODpkt1ZSCkWKgBSUDFuhgKd0DEJSACAMF268R8my4OCSGEbrRgWqUAyAEf9stsXgynsJWD5rdPoH5LPOvmX4Q8fBEwDMPNZFlqOl6yTQizh+Nk2vJeGpzUH5KkrS15byUIJx6ZUNFC9/daSVShJ8IzlKK5PU9GIXUNBW15ZK2oHyosseZw0vcDS+49l6Wma0+CeSXPC/c4NUpZs0Ma9PL/ZkdbjfSEyZoa/FS5x1D6fqx6WJXmbHoOipUdJOkUL7SV9Wy98ucWuPUJyW7Ekjb6JdIMXq6h7J62aXtsAaQ3Yh1/wAgqhFyeyFJpIuYxW4nmq6euLjBJC3qQT1jC/rorW0BuNdPFU4Nb1sKM4vhmX0vw9z3xPpo4QBGC5jILOJueQPPYlQ+S0/cysIBbRTAggiYAg+S79F6ZHNn9SLgK7CUcgoF0DEcdUAKkMBSsYhRYASAxNyvJUOrc2AQqljpWAAovZgTxvLSC1aRdJEyV8iyuL3XdvYBRN3LccUkthWjUKZcFGzTxZIWTOJBuC0DYgc1oopo6dLgarM/D2M4hs1Rd5LbngphBN8nPmyOTcqPT0GEEQipgb1zWg3a0dq/kvWhp+iPWt0eFl1Vz6JbNjVOIU1DRN+Kwyua5xt1psy53Ivz02/RebkyttNo9XHiSXysyKrGqd4vTx1DX20Ejw4X56WSWVf6V/Bfb+7KVRiT5XnrIoZLEgZ2k2/FEsu/pX8DUaXLNvofUCStb8iFvz4x2W2+l/6KOtSfC/gGmlybFbM09KWRGN0ZijYXONtQZI9BYeB90nzaQLjc3qielZBeowKrtYwSsZFJd7csYBbZxt2XMF9T62UbUJWeBZ/Er+zl/wDNfoeG69DRemRln9SJL6LsJQEDOugZG7dIaFKAAkApQMUpAY47xXmYnUjU4m62lvsNCcVyN1sMePM42G/gjqfAVZoy4VLCwPnOV9r9WBcgePALR43yzonpp41bJoaWGljzzsa+Q7NdqG+nFV0xW7LjCONXJWxKuoz2yaDLoENojLlb2XBSDmDRzLnzU7Lk5mr4PRYHjTMPHyn57jWN2n4r1MGphCFL+DydVo3matV9z1dFheB9IIs9VTymQE/LNa4AHwFl5X6jGemSml1R9/b8ndpcqyycHs/+fwdN0FwZtiyjcAbnWrdf/ivLjr4t8Hc8LXk8tjFHgOGtYZcMnvI3M0Nrzr5fKI97L05QcXRk0VcLxrCMOkElPhNbfrGv1xBvAOFv4P8Am/AKVa3A9HQdJcMxOaeSqpMQpIoIRI6SKeKQtPWMAOsV+84DjvtypyfknpK1H0uro6+WN01RV00DZXRxwy9VKGC5JJs4AZb3Gh9U+Qqjz9JKJo6qUBwD6kus43IuCdSu3Rr5ZHPn5RNmXUSnsC6B2ddAxHFIYt0gR10DFJQMUoAxvqK8hOpG3gZdLAQ7rlmqYzZ6MRMfWvneAfh2Z2g87gD81eGNyO/9Pxqea343NCrnIc9zjq7c81vJ+53Z5dN/cwpp3PkJuFi2eLOTbEzk/U1K2QEE8Sw+qYggjw9lSEzToqqop7Ohke3nl1v6LqxznHg48mOEnv8A5+56CHGKiqpjHPVzmN1mva2Qg8/bRXHR6Sb63H+jOWp1EF0xf9lXEcC6yVsraaaojlALZH1ljtsezus9RpJwdp2nwdGh1HxVxXqXK/tfYqxYAydjxHREyN7XU/G9tw5j5dja/P8AsuKUJLk65RceSzRYccNgrX1GB1s9PPAI5mMqmEhokY+4yi+7Bw58kMi0T1HS2mxCB9AynnpxVWjkkiawyvB0sTxvflfVHgK8mFSNayGpYwPa1tSQA/vAAcfFd2kfyv8AJz5uV+DNfJKXvtM8do2GZYPqlb6jbbbYjM1Q3eZ/uocskeWxrpfg74qf/Feju5PcfSjvi5x/MKO9k9w6Y+wfjJx/M/BHfye4dMfYt0Uz5WvLzcgrq0+SU0+ozkkicrdsQCUhoxjuvIfJsNwXRewheKxk7Yzf6NDL8a06OyN0O+6vC92er+meuX4IcQluSAVU2Gsl7GS46rI8tnIskIKYBDtU0wZdpZS2w09V0Y5vwc+SCZq0jw5+YixA3vdd2F9UtzlzRqJ7PCpWzU4gdbXQG17eK9GcO7BxPC7stNnWWHg8rV45SwVJayoxCmliD4n5II3X117zjxC+XnKV1LwfYdx5Ypt2ilUdJKkuc2nxKq6twIPWU0bXa3vt5pr7k9KMmldBFVQzCokaY3tcCI9RY301UtIZfpXmSCeUkkvqC4k+Iuu7SemVe5zajZr8GU46ucf6isE6Vm/sh3i8FyryK4WRF/NRWXMag4pAckMv4fpG/wA12aXhmWQskrqIBdIZjndeS+Tc66aYBGrgkwNvE6kVbIJDmbMWBpDtDcBVJ2kz1s2SOTHHwzJkfIHEOJuOam2ebKU7pidYeIHsiyDs/wDlHsnYgZ+QsiwOD0dQDsmc3UAKoza4E4p8l6grp3VMbHOAYdCLLpwZ5vIlexhmxR7bZ7bAam8gaNQTwXv4pWj5rV4iHHKWFle9zoo7S3fmLRqb6/j+a87U4oxyN1zufQfpWZZdNFPlbGaaSmeLmniI/wDgLFY4ex2Ng+z6Rw/9WP7qrs439Jk8hDWxRU0DWwxhl33IHknUMS2RhLqnI8yTd+p4rzFu6OzhFh+lOfJdWTbGzGPqKnBcRucgAJIC9h/8N/mu3TcMyyclkldJACUAZJ3Xks6B4oXyuysaSfAJFRi5bI06SgMbs0haXcuSDrhp3Hd8nV7DE1hDibOBuTcoLzRqC+zKlRcvc8gap3btmOWEupyZVda6DlYEgDogAiyoC7Rmna5vXlgF9dLkLpw9r6mZZHP6SKd7fjXuhN2ZjlIFtFm2u63DgpJ9CUjYwHEXRTtBJ3Xp6TO06Z52s06nFnscZw9mOYGGwgCoh+ZEefMev52XZrNP3obcrg8TRaiWl1Hz+l7M8JHS1jM8UTyM9szRfWy8WMJ7qLPp55YbORMKWqh78M1+ZK06Jx5TI7sJL5WhS6oGj4fMvdt6o+d+B1DmzL6sgmz2feXMotM6bC9kjhbM0jwcE59clVk7IT4eW2jCfLVR25+xXUhTDIN2OHop6JewWgdW8btKVNeAtFui0Y7nddem4Zlk5ROV02SC6LAo0jGST2lzZbE9leSztwxjKaUjVZUxwDLFDlb4H9lFs9GLhD0olfWBttH6gcRyS6mauitWzCendYEZRxVxfJhn3xspPN2gniEHPJ2is7dBzSFTICgDkDOQA8XfF/FA41e5ahflcCF2YpX8xz5Y+D3HRvEXuyx2021Xv6fJ1xR83rsEVcii/F34TjNUYWtOdzuy5lwAHG1tQvKnmeHPJo9SGKObSxjL2IMSx+bE3tdK62UdkNZYD0ussmreTcrS6DHp1SMx87iXdlhHqsviXFVR29uMna2KxrGgkOgafVL4xeYj+H9mJ8VTPJvTC48iqWoxv6BPFNfUMJKN+hgPsE1lwv6RdGXxIlY2l4MkHkf3WkXgfh/5+5LWVeUXqKgjrJ4oo3yNdI4DtHRbrFjlxZhPNOCbZuVOEQPhbAGBpHceDqDz2WzjGSo82GryKfVf7Hk5ozFK+NxuWGxIXM1To9mMupWRFIo//9k="
          alt=""
        />
        <h3>Saurabh Sadashiva</h3>
        <h5>Software Enginner</h5>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <h3>Arfani Shaik</h3>
        <h5>Software Enginner</h5>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <h3>Rohit Patel</h3>
        <h5>Software Enginner</h5>
      </div>
    </div>
  );
};

export default DevoloperContact;
