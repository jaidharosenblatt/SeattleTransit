const geoLocationMap = {
  roosevelt: {
    name: "Roosevelt",
    latitude: 47.676399,
    longitude: -122.31588,
    southbound: `4:58 a.m.
    5:10 a.m.
    :
    No stop
    5:22 a.m.
    5:34 a.m.
    :
    No stop
    5:46 a.m.
    5:58 a.m.
    6:06 a.m.
    6:14 a.m.
    6:22 a.m.
    6:30 a.m.
    6:38 a.m.
    6:46 a.m.
    6:54 a.m.
    7:02 a.m.
    7:10 a.m.
    7:18 a.m.
    7:26 a.m.
    7:34 a.m.
    7:42 a.m.
    7:50 a.m.
    7:58 a.m.
    8:06 a.m.
    8:14 a.m.
    8:22 a.m.
    8:30 a.m.
    8:38 a.m.
    8:46 a.m.
    8:54 a.m.
    9:02 a.m.
    9:10 a.m.
    9:18 a.m.
    9:26 a.m.
    9:34 a.m.
    9:46 a.m.
    9:56 a.m.
    10:06 a.m.
    10:16 a.m.
    10:26 a.m.
    10:36 a.m.
    10:46 a.m.
    10:56 a.m.
    11:06 a.m.
    11:16 a.m.
    11:26 a.m.
    11:36 a.m.
    11:46 a.m.
    11:56 a.m.
    12:06 p.m.
    12:16 p.m.
    12:26 p.m.
    12:36 p.m.
    12:46 p.m.
    12:56 p.m.
    1:06 p.m.
    1:16 p.m.
    1:26 p.m.
    1:36 p.m.
    1:46 p.m.
    :
    No stop
    1:56 p.m.
    2:06 p.m.
    2:16 p.m.
    2:26 p.m.
    :
    No stop
    2:36 p.m.
    2:46 p.m.
    2:56 p.m.
    3:04 p.m.
    3:12 p.m.
    3:20 p.m.
    3:28 p.m.
    3:36 p.m.
    3:44 p.m.
    3:52 p.m.
    4:00 p.m.
    4:08 p.m.
    4:16 p.m.
    4:24 p.m.
    4:32 p.m.
    4:40 p.m.
    4:48 p.m.
    4:56 p.m.
    5:04 p.m.
    5:12 p.m.
    5:20 p.m.
    5:28 p.m.
    5:36 p.m.
    5:44 p.m.
    5:52 p.m.
    6:00 p.m.
    6:08 p.m.
    6:16 p.m.
    6:24 p.m.
    6:32 p.m.
    6:40 p.m.
    6:48 p.m.
    6:56 p.m.
    7:07 p.m.
    7:17 p.m.
    7:26 p.m.
    7:36 p.m.
    7:46 p.m.
    7:56 p.m.
    8:06 p.m.
    8:16 p.m.
    8:26 p.m.
    8:36 p.m.
    8:46 p.m.
    8:56 p.m.
    9:06 p.m.
    9:16 p.m.
    9:26 p.m.
    9:36 p.m.
    9:46 p.m.
    9:56 p.m.
    10:06 p.m.
    10:16 p.m.
    10:31 p.m.
    10:46 p.m.
    11:01 p.m.
    11:16 p.m.
    11:31 p.m.
    11:46 p.m.
    12:01 a.m.
    12:16 a.m.
    12:31 a.m.`,
    northbound: `4:56 a.m.
    5:08 a.m.
    5:20 a.m.
    5:32 a.m.
    5:44 a.m.
    5:50 a.m.
    5:58 a.m.
    6:02 a.m.
    6:14 a.m.
    6:22 a.m.
    6:26 a.m.
    6:36 a.m.
    6:44 a.m.
    6:52 a.m.
    7:00 a.m.
    7:08 a.m.
    7:16 a.m.
    7:24 a.m.
    7:32 a.m.
    7:40 a.m.
    7:48 a.m.
    7:56 a.m.
    8:04 a.m.
    8:12 a.m.
    8:20 a.m.
    8:28 a.m.
    8:36 a.m.
    8:44 a.m.
    8:52 a.m.
    9:00 a.m.
    9:08 a.m.
    9:16 a.m.
    9:24 a.m.
    9:32 a.m.
    9:40 a.m.
    9:50 a.m.
    10:00 a.m.
    10:10 a.m.
    10:20 a.m.
    10:30 a.m.
    10:40 a.m.
    10:50 a.m.
    11:00 a.m.
    11:10 a.m.
    11:20 a.m.
    11:30 a.m.
    11:40 a.m.
    11:50 a.m.
    12:00 p.m.
    12:10 p.m.
    12:20 p.m.
    12:30 p.m.
    12:40 p.m.
    12:50 p.m.
    1:00 p.m.
    1:10 p.m.
    1:20 p.m.
    1:30 p.m.
    1:40 p.m.
    1:50 p.m.
    2:00 p.m.
    2:10 p.m.
    2:20 p.m.
    2:30 p.m.
    2:40 p.m.
    2:48 p.m.
    2:57 p.m.
    3:00 p.m.
    3:10 p.m.
    3:18 p.m.
    3:26 p.m.
    3:34 p.m.
    3:42 p.m.
    3:50 p.m.
    3:58 p.m.
    4:06 p.m.
    4:14 p.m.
    4:22 p.m.
    4:30 p.m.
    4:38 p.m.
    4:46 p.m.
    4:54 p.m.
    5:02 p.m.
    5:10 p.m.
    5:18 p.m.
    5:26 p.m.
    5:34 p.m.
    5:42 p.m.
    5:50 p.m.
    5:58 p.m.
    6:06 p.m.
    6:14 p.m.
    6:22 p.m.
    6:30 p.m.
    6:38 p.m.
    6:46 p.m.
    6:54 p.m.
    7:02 p.m.
    7:10 p.m.
    7:20 p.m.
    7:32 p.m.
    7:40 p.m.
    7:50 p.m.
    8:00 p.m.
    8:11 p.m.
    8:20 p.m.
    8:30 p.m.
    8:40 p.m.
    8:50 p.m.
    9:00 p.m.
    9:10 p.m.
    9:20 p.m.
    9:30 p.m.
    9:40 p.m.
    9:50 p.m.
    10:00 p.m.
    10:10 p.m.
    10:20 p.m.
    10:30 p.m.
    10:40 p.m.
    10:50 p.m.
    11:05 p.m.
    11:20 p.m.
    11:35 p.m.
    11:50 p.m.
    12:05 a.m.
    12:20 a.m.
    12:35 a.m.
    :
    No stop
    :
    No stop
    :`,
  },
  udistrict: {
    name: "U District",
    latitude: 47.66021,
    longitude: -122.31397,
    southbound: `5:00 a.m.
    5:12 a.m.
    :
    No stop
    5:24 a.m.
    5:36 a.m.
    :
    No stop
    5:48 a.m.
    6:00 a.m.
    6:08 a.m.
    6:16 a.m.
    6:24 a.m.
    6:32 a.m.
    6:40 a.m.
    6:48 a.m.
    6:56 a.m.
    7:04 a.m.
    7:12 a.m.
    7:20 a.m.
    7:28 a.m.
    7:36 a.m.
    7:44 a.m.
    7:52 a.m.
    8:00 a.m.
    8:08 a.m.
    8:16 a.m.
    8:24 a.m.
    8:32 a.m.
    8:40 a.m.
    8:48 a.m.
    8:56 a.m.
    9:04 a.m.
    9:12 a.m.
    9:20 a.m.
    9:28 a.m.
    9:36 a.m.
    9:48 a.m.
    9:58 a.m.
    10:08 a.m.
    10:18 a.m.
    10:28 a.m.
    10:38 a.m.
    10:48 a.m.
    10:58 a.m.
    11:08 a.m.
    11:18 a.m.
    11:28 a.m.
    11:38 a.m.
    11:48 a.m.
    11:58 a.m.
    12:08 p.m.
    12:18 p.m.
    12:28 p.m.
    12:38 p.m.
    12:48 p.m.
    12:58 p.m.
    1:08 p.m.
    1:18 p.m.
    1:28 p.m.
    1:38 p.m.
    1:48 p.m.
    :
    No stop
    1:58 p.m.
    2:08 p.m.
    2:18 p.m.
    2:28 p.m.
    :
    No stop
    2:38 p.m.
    2:48 p.m.
    2:58 p.m.
    3:06 p.m.
    3:14 p.m.
    3:22 p.m.
    3:30 p.m.
    3:38 p.m.
    3:46 p.m.
    3:54 p.m.
    4:02 p.m.
    4:10 p.m.
    4:18 p.m.
    4:26 p.m.
    4:34 p.m.
    4:42 p.m.
    4:50 p.m.
    4:58 p.m.
    5:06 p.m.
    5:14 p.m.
    5:22 p.m.
    5:30 p.m.
    5:38 p.m.
    5:46 p.m.
    5:54 p.m.
    6:02 p.m.
    6:10 p.m.
    6:18 p.m.
    6:26 p.m.
    6:34 p.m.
    6:42 p.m.
    6:50 p.m.
    6:58 p.m.
    7:09 p.m.
    7:19 p.m.
    7:28 p.m.
    7:38 p.m.
    7:48 p.m.
    7:58 p.m.
    8:08 p.m.
    8:18 p.m.
    8:28 p.m.
    8:38 p.m.
    8:48 p.m.
    8:58 p.m.
    9:08 p.m.
    9:18 p.m.
    9:28 p.m.
    9:38 p.m.
    9:48 p.m.
    9:58 p.m.
    10:08 p.m.
    10:18 p.m.
    10:33 p.m.
    10:48 p.m.
    11:03 p.m.
    11:18 p.m.
    11:33 p.m.
    11:48 p.m.
    12:03 a.m.
    12:18 a.m.
    12:33 a.m.`,
    northbound: `4:54 a.m.
    5:06 a.m.
    5:18 a.m.
    5:30 a.m.
    5:42 a.m.
    5:48 a.m.
    5:56 a.m.
    6:00 a.m.
    6:12 a.m.
    6:20 a.m.
    6:24 a.m.
    6:34 a.m.
    6:42 a.m.
    6:50 a.m.
    6:58 a.m.
    7:06 a.m.
    7:14 a.m.
    7:22 a.m.
    7:30 a.m.
    7:38 a.m.
    7:46 a.m.
    7:54 a.m.
    8:02 a.m.
    8:10 a.m.
    8:18 a.m.
    8:26 a.m.
    8:34 a.m.
    8:42 a.m.
    8:50 a.m.
    8:58 a.m.
    9:06 a.m.
    9:14 a.m.
    9:22 a.m.
    9:30 a.m.
    9:38 a.m.
    9:48 a.m.
    9:58 a.m.
    10:08 a.m.
    10:18 a.m.
    10:28 a.m.
    10:38 a.m.
    10:48 a.m.
    10:58 a.m.
    11:08 a.m.
    11:18 a.m.
    11:28 a.m.
    11:38 a.m.
    11:48 a.m.
    11:58 a.m.
    12:08 p.m.
    12:18 p.m.
    12:28 p.m.
    12:38 p.m.
    12:48 p.m.
    12:58 p.m.
    1:08 p.m.
    1:18 p.m.
    1:28 p.m.
    1:38 p.m.
    1:48 p.m.
    1:58 p.m.
    2:08 p.m.
    2:18 p.m.
    2:28 p.m.
    2:38 p.m.
    2:46 p.m.
    2:55 p.m.
    2:58 p.m.
    3:08 p.m.
    3:16 p.m.
    3:24 p.m.
    3:32 p.m.
    3:40 p.m.
    3:48 p.m.
    3:56 p.m.
    4:04 p.m.
    4:12 p.m.
    4:20 p.m.
    4:28 p.m.
    4:36 p.m.
    4:44 p.m.
    4:52 p.m.
    5:00 p.m.
    5:08 p.m.
    5:16 p.m.
    5:24 p.m.
    5:32 p.m.
    5:40 p.m.
    5:48 p.m.
    5:56 p.m.
    6:04 p.m.
    6:12 p.m.
    6:20 p.m.
    6:28 p.m.
    6:36 p.m.
    6:44 p.m.
    6:52 p.m.
    7:00 p.m.
    7:08 p.m.
    7:18 p.m.
    7:30 p.m.
    7:38 p.m.
    7:48 p.m.
    7:58 p.m.
    8:09 p.m.
    8:18 p.m.
    8:28 p.m.
    8:38 p.m.
    8:48 p.m.
    8:58 p.m.
    9:08 p.m.
    9:18 p.m.
    9:28 p.m.
    9:38 p.m.
    9:48 p.m.
    9:58 p.m.
    10:08 p.m.
    10:18 p.m.
    10:28 p.m.
    10:38 p.m.
    10:48 p.m.
    11:03 p.m.
    11:18 p.m.
    11:33 p.m.
    11:48 p.m.
    12:03 a.m.
    12:18 a.m.
    12:33 a.m.
    :
    No stop
    :
    No stop
    :
    No stop
    :
    No stop
    `,
  },
  uw: {
    name: "University of Washington",
    latitude: 47.65005,
    longitude: -122.30431,
    northbound: `4:40 a.m.
    4:52 a.m.
    5:04 a.m.
    5:16 a.m.
    5:28 a.m.
    5:40 a.m.
    5:46 a.m.
    5:54 a.m.
    5:58 a.m.
    6:10 a.m.
    6:18 a.m.
    6:22 a.m.
    6:32 a.m.
    6:40 a.m.
    6:48 a.m.
    6:56 a.m.
    7:04 a.m.
    7:12 a.m.
    7:20 a.m.
    7:28 a.m.
    7:36 a.m.
    7:44 a.m.
    7:52 a.m.
    8:00 a.m.
    8:08 a.m.
    8:16 a.m.
    8:24 a.m.
    8:32 a.m.
    8:40 a.m.
    8:48 a.m.
    8:56 a.m.
    9:04 a.m.
    9:12 a.m.
    9:20 a.m.
    9:28 a.m.
    9:36 a.m.
    9:46 a.m.
    9:56 a.m.
    10:06 a.m.
    10:16 a.m.
    10:26 a.m.
    10:36 a.m.
    10:46 a.m.
    10:56 a.m.
    11:06 a.m.
    11:16 a.m.
    11:26 a.m.
    11:36 a.m.
    11:46 a.m.
    11:56 a.m.
    12:06 p.m.
    12:16 p.m.
    12:26 p.m.
    12:36 p.m.
    12:46 p.m.
    12:56 p.m.
    1:06 p.m.
    1:16 p.m.
    1:26 p.m.
    1:36 p.m.
    1:46 p.m.
    1:56 p.m.
    2:06 p.m.
    2:16 p.m.
    2:26 p.m.
    2:36 p.m.
    2:44 p.m.
    2:53 p.m.
    2:56 p.m.
    3:06 p.m.
    3:14 p.m.
    3:22 p.m.
    3:30 p.m.
    3:38 p.m.
    3:46 p.m.
    3:54 p.m.
    4:02 p.m.
    4:10 p.m.
    4:18 p.m.
    4:26 p.m.
    4:34 p.m.
    4:42 p.m.
    4:50 p.m.
    4:58 p.m.
    5:06 p.m.
    5:14 p.m.
    5:22 p.m.
    5:30 p.m.
    5:38 p.m.
    5:46 p.m.
    5:54 p.m.
    6:02 p.m.
    6:10 p.m.
    6:18 p.m.
    6:26 p.m.
    6:34 p.m.
    6:42 p.m.
    6:50 p.m.
    6:58 p.m.
    7:06 p.m.
    7:16 p.m.
    7:28 p.m.
    7:36 p.m.
    7:46 p.m.
    7:56 p.m.
    8:07 p.m.
    8:16 p.m.
    8:26 p.m.
    8:36 p.m.
    8:46 p.m.
    8:56 p.m.
    9:06 p.m.
    9:16 p.m.
    9:26 p.m.
    9:36 p.m.
    9:46 p.m.
    9:56 p.m.
    10:06 p.m.
    10:16 p.m.
    10:26 p.m.
    10:36 p.m.
    10:46 p.m.
    11:01 p.m.
    11:16 p.m.
    11:31 p.m.
    11:46 p.m.
    12:01 a.m.
    12:16 a.m.
    12:31 a.m.
    :
    No stop
    :
    No stop
    :
    No stop
    :
    No stop
    :
    No stop
    :
    No stop
    :`,
    southbound: `4:45 a.m.
    :
    No stop
    5:02 a.m.
    5:14 a.m.
    :
    No stop
    5:26 a.m.
    5:38 a.m.
    :
    No stop
    5:50 a.m.
    6:02 a.m.
    6:10 a.m.
    6:18 a.m.
    6:26 a.m.
    6:34 a.m.
    6:42 a.m.
    6:50 a.m.
    6:58 a.m.
    7:06 a.m.
    7:14 a.m.
    7:22 a.m.
    7:30 a.m.
    7:38 a.m.
    7:46 a.m.
    7:54 a.m.
    8:02 a.m.
    8:10 a.m.
    8:18 a.m.
    8:26 a.m.
    8:34 a.m.
    8:42 a.m.
    8:50 a.m.
    8:58 a.m.
    9:06 a.m.
    9:14 a.m.
    9:22 a.m.
    9:30 a.m.
    9:38 a.m.
    9:50 a.m.
    10:00 a.m.
    10:10 a.m.
    10:20 a.m.
    10:30 a.m.
    10:40 a.m.
    10:50 a.m.
    11:00 a.m.
    11:10 a.m.
    11:20 a.m.
    11:30 a.m.
    11:40 a.m.
    11:50 a.m.
    12:00 p.m.
    12:10 p.m.
    12:20 p.m.
    12:30 p.m.
    12:40 p.m.
    12:50 p.m.
    1:00 p.m.
    1:10 p.m.
    1:20 p.m.
    1:30 p.m.
    1:40 p.m.
    1:50 p.m.
    :
    No stop
    2:00 p.m.
    2:10 p.m.
    2:20 p.m.
    2:30 p.m.
    :
    No stop
    2:40 p.m.
    2:50 p.m.
    3:00 p.m.
    3:08 p.m.
    3:16 p.m.
    3:24 p.m.
    3:32 p.m.
    3:40 p.m.
    3:48 p.m.
    3:56 p.m.
    4:04 p.m.
    4:12 p.m.
    4:20 p.m.
    4:28 p.m.
    4:36 p.m.
    4:44 p.m.
    4:52 p.m.
    5:00 p.m.
    5:08 p.m.
    5:16 p.m.
    5:24 p.m.
    5:32 p.m.
    5:40 p.m.
    5:48 p.m.
    5:56 p.m.
    6:04 p.m.
    6:12 p.m.
    6:20 p.m.
    6:28 p.m.
    6:36 p.m.
    6:44 p.m.
    6:52 p.m.
    7:00 p.m.
    7:11 p.m.
    7:21 p.m.
    7:30 p.m.
    7:40 p.m.
    7:50 p.m.
    8:00 p.m.
    8:10 p.m.
    8:20 p.m.
    8:30 p.m.
    8:40 p.m.
    8:50 p.m.
    9:00 p.m.
    9:10 p.m.
    9:20 p.m.
    9:30 p.m.
    9:40 p.m.
    9:50 p.m.
    10:00 p.m.
    10:10 p.m.
    10:20 p.m.
    10:35 p.m.
    10:50 p.m.
    11:05 p.m.
    11:20 p.m.
    11:35 p.m.
    11:50 p.m.
    12:05 a.m.
    12:20 a.m.
    12:35 a.m.`,
  },
  caphill: {
    name: "Capitol Hill",
    latitude: 47.623397,
    longitude: -122.32092,
    northbound: `4:36 a.m.
    4:48 a.m.
    5:00 a.m.
    5:12 a.m.
    5:24 a.m.
    5:36 a.m.
    5:42 a.m.
    5:50 a.m.
    5:54 a.m.
    6:06 a.m.
    6:14 a.m.
    6:18 a.m.
    6:28 a.m.
    6:36 a.m.
    6:44 a.m.
    6:52 a.m.
    7:00 a.m.
    7:08 a.m.
    7:16 a.m.
    7:24 a.m.
    7:32 a.m.
    7:40 a.m.
    7:48 a.m.
    7:56 a.m.
    8:04 a.m.
    8:12 a.m.
    8:20 a.m.
    8:28 a.m.
    8:36 a.m.
    8:44 a.m.
    8:52 a.m.
    9:00 a.m.
    9:08 a.m.
    9:16 a.m.
    9:24 a.m.
    9:32 a.m.
    9:42 a.m.
    9:52 a.m.
    10:02 a.m.
    10:12 a.m.
    10:22 a.m.
    10:32 a.m.
    10:42 a.m.
    10:52 a.m.
    11:02 a.m.
    11:12 a.m.
    11:22 a.m.
    11:32 a.m.
    11:42 a.m.
    11:52 a.m.
    12:02 p.m.
    12:12 p.m.
    12:22 p.m.
    12:32 p.m.
    12:42 p.m.
    12:52 p.m.
    1:02 p.m.
    1:12 p.m.
    1:22 p.m.
    1:32 p.m.
    1:42 p.m.
    1:52 p.m.
    2:02 p.m.
    2:12 p.m.
    2:22 p.m.
    2:32 p.m.
    2:40 p.m.
    2:49 p.m.
    2:52 p.m.
    3:02 p.m.
    3:10 p.m.
    3:18 p.m.
    3:26 p.m.
    3:34 p.m.
    3:42 p.m.
    3:50 p.m.
    3:58 p.m.
    4:06 p.m.
    4:14 p.m.
    4:22 p.m.
    4:30 p.m.
    4:38 p.m.
    4:46 p.m.
    4:54 p.m.
    5:02 p.m.
    5:10 p.m.
    5:18 p.m.
    5:26 p.m.
    5:34 p.m.
    5:42 p.m.
    5:50 p.m.
    5:58 p.m.
    6:06 p.m.
    6:14 p.m.
    6:22 p.m.
    6:30 p.m.
    6:38 p.m.
    6:46 p.m.
    6:54 p.m.
    7:02 p.m.
    7:12 p.m.
    7:24 p.m.
    7:32 p.m.
    7:42 p.m.
    7:52 p.m.
    8:03 p.m.
    8:12 p.m.
    8:22 p.m.
    8:32 p.m.
    8:42 p.m.
    8:52 p.m.
    9:02 p.m.
    9:12 p.m.
    9:22 p.m.
    9:32 p.m.
    9:42 p.m.
    9:52 p.m.
    10:02 p.m.
    10:12 p.m.
    10:22 p.m.
    10:32 p.m.
    10:42 p.m.
    10:57 p.m.
    11:12 p.m.
    11:27 p.m.
    11:42 p.m.
    11:57 p.m.
    12:12 a.m.
    12:27 a.m.
    :
    No stop
    :
    No stop
    :
    No stop
    :`,
    southbound: `4:51 a.m.
    :
    No stop
    5:06 a.m.
    5:18 a.m.
    :
    No stop
    5:30 a.m.
    5:42 a.m.
    :
    No stop
    5:54 a.m.
    6:06 a.m.
    6:14 a.m.
    6:22 a.m.
    6:30 a.m.
    6:38 a.m.
    6:46 a.m.
    6:54 a.m.
    7:02 a.m.
    7:10 a.m.
    7:18 a.m.
    7:26 a.m.
    7:34 a.m.
    7:42 a.m.
    7:50 a.m.
    7:58 a.m.
    8:06 a.m.
    8:14 a.m.
    8:22 a.m.
    8:30 a.m.
    8:38 a.m.
    8:46 a.m.
    8:54 a.m.
    9:02 a.m.
    9:10 a.m.
    9:18 a.m.
    9:26 a.m.
    9:34 a.m.
    9:42 a.m.
    9:54 a.m.
    10:04 a.m.
    10:14 a.m.
    10:24 a.m.
    10:34 a.m.
    10:44 a.m.
    10:54 a.m.
    11:04 a.m.
    11:14 a.m.
    11:24 a.m.
    11:34 a.m.
    11:44 a.m.
    11:54 a.m.
    12:04 p.m.
    12:14 p.m.
    12:24 p.m.
    12:34 p.m.
    12:44 p.m.
    12:54 p.m.
    1:04 p.m.
    1:14 p.m.
    1:24 p.m.
    1:34 p.m.
    1:44 p.m.
    1:54 p.m.
    :
    No stop
    2:04 p.m.
    2:14 p.m.
    2:24 p.m.
    2:34 p.m.
    :
    No stop
    2:44 p.m.
    2:54 p.m.
    3:04 p.m.
    3:12 p.m.
    3:20 p.m.
    3:28 p.m.
    3:36 p.m.
    3:44 p.m.
    3:52 p.m.
    4:00 p.m.
    4:08 p.m.
    4:16 p.m.
    4:24 p.m.
    4:32 p.m.
    4:40 p.m.
    4:48 p.m.
    4:56 p.m.
    5:04 p.m.
    5:12 p.m.
    5:20 p.m.
    5:28 p.m.
    5:36 p.m.
    5:44 p.m.
    5:52 p.m.
    6:00 p.m.
    6:08 p.m.
    6:16 p.m.
    6:24 p.m.
    6:32 p.m.
    6:40 p.m.
    6:48 p.m.
    6:56 p.m.
    7:04 p.m.
    7:15 p.m.
    7:25 p.m.
    7:34 p.m.
    7:44 p.m.
    7:54 p.m.
    8:04 p.m.
    8:14 p.m.
    8:24 p.m.
    8:34 p.m.
    8:44 p.m.
    8:54 p.m.
    9:04 p.m.
    9:14 p.m.
    9:24 p.m.
    9:34 p.m.
    9:44 p.m.
    9:54 p.m.
    10:04 p.m.
    10:14 p.m.
    10:24 p.m.
    10:39 p.m.
    10:54 p.m.
    11:09 p.m.
    11:24 p.m.
    11:39 p.m.
    11:54 p.m.
    12:09 a.m.
    12:24 a.m.
    12:39 a.m.`,
  },
  northgate: {
    name: "Northgate",
    latitude: 47.704994201660156,
    longitude: -122.32857513427734,
    southbound: `4:51 a.m.
    5:07 a.m.
    :
    No stop
    5:19 a.m.
    5:31 a.m.
    :
    No stop
    5:43 a.m.
    5:55 a.m.
    6:03 a.m.
    6:11 a.m.
    6:19 a.m.
    6:27 a.m.
    6:35 a.m.
    6:43 a.m.
    6:51 a.m.
    6:59 a.m.
    7:07 a.m.
    7:15 a.m.
    7:23 a.m.
    7:31 a.m.
    7:39 a.m.
    7:47 a.m.
    7:55 a.m.
    8:03 a.m.
    8:11 a.m.
    8:19 a.m.
    8:27 a.m.
    8:35 a.m.
    8:43 a.m.
    8:51 a.m.
    8:59 a.m.
    9:07 a.m.
    9:15 a.m.
    9:23 a.m.
    9:31 a.m.
    9:43 a.m.
    9:53 a.m.
    10:03 a.m.
    10:13 a.m.
    10:23 a.m.
    10:33 a.m.
    10:43 a.m.
    10:53 a.m.
    11:03 a.m.
    11:13 a.m.
    11:23 a.m.
    11:33 a.m.
    11:43 a.m.
    11:53 a.m.
    12:03 p.m.
    12:13 p.m.
    12:23 p.m.
    12:33 p.m.
    12:43 p.m.
    12:53 p.m.
    1:03 p.m.
    1:13 p.m.
    1:23 p.m.
    1:33 p.m.
    1:43 p.m.
    :
    No stop
    1:53 p.m.
    2:03 p.m.
    2:13 p.m.
    2:23 p.m.
    :
    No stop
    2:33 p.m.
    2:43 p.m.
    2:53 p.m.
    3:01 p.m.
    3:09 p.m.
    3:17 p.m.
    3:25 p.m.
    3:33 p.m.
    3:41 p.m.
    3:49 p.m.
    3:57 p.m.
    4:05 p.m.
    4:13 p.m.
    4:21 p.m.
    4:29 p.m.
    4:37 p.m.
    4:45 p.m.
    4:53 p.m.
    5:01 p.m.
    5:09 p.m.
    5:17 p.m.
    5:25 p.m.
    5:33 p.m.
    5:41 p.m.
    5:49 p.m.
    5:57 p.m.
    6:05 p.m.
    6:13 p.m.
    6:21 p.m.
    6:29 p.m.
    6:37 p.m.
    6:45 p.m.
    6:53 p.m.
    7:04 p.m.
    7:14 p.m.
    7:23 p.m.
    7:33 p.m.
    7:43 p.m.
    7:53 p.m.
    8:03 p.m.
    8:13 p.m.
    8:23 p.m.
    8:33 p.m.
    8:43 p.m.
    8:53 p.m.
    9:03 p.m.
    9:13 p.m.
    9:23 p.m.
    9:33 p.m.
    9:43 p.m.
    9:53 p.m.
    10:03 p.m.
    10:13 p.m.
    10:28 p.m.
    10:43 p.m.
    10:58 p.m.
    11:13 p.m.
    11:28 p.m.
    11:43 p.m.
    11:58 p.m.
    12:13 a.m.
    12:28 a.m.`,
    northbound: `4:59 a.m.
    5:11 a.m.
    5:23 a.m.
    5:35 a.m.
    5:47 a.m.
    5:53 a.m.
    6:01 a.m.
    6:05 a.m.
    6:17 a.m.
    6:25 a.m.
    6:29 a.m.
    6:39 a.m.
    6:47 a.m.
    6:55 a.m.
    7:03 a.m.
    7:11 a.m.
    7:19 a.m.
    7:27 a.m.
    7:35 a.m.
    7:43 a.m.
    7:51 a.m.
    7:59 a.m.
    8:07 a.m.
    8:15 a.m.
    8:23 a.m.
    8:31 a.m.
    8:39 a.m.
    8:47 a.m.
    8:55 a.m.
    9:03 a.m.
    9:11 a.m.
    9:19 a.m.
    9:27 a.m.
    9:35 a.m.
    9:43 a.m.
    9:53 a.m.
    10:03 a.m.
    10:13 a.m.
    10:23 a.m.
    10:33 a.m.
    10:43 a.m.
    10:53 a.m.
    11:03 a.m.
    11:13 a.m.
    11:23 a.m.
    11:33 a.m.
    11:43 a.m.
    11:53 a.m.
    12:03 p.m.
    12:13 p.m.
    12:23 p.m.
    12:33 p.m.
    12:43 p.m.
    12:53 p.m.
    1:03 p.m.
    1:13 p.m.
    1:23 p.m.
    1:33 p.m.
    1:43 p.m.
    1:53 p.m.
    2:03 p.m.
    2:13 p.m.
    2:23 p.m.
    2:33 p.m.
    2:43 p.m.
    2:51 p.m.
    3:00 p.m.
    3:03 p.m.
    3:13 p.m.
    3:21 p.m.
    3:29 p.m.
    3:37 p.m.
    3:45 p.m.
    3:53 p.m.
    4:01 p.m.
    4:09 p.m.
    4:17 p.m.
    4:25 p.m.
    4:33 p.m.
    4:41 p.m.
    4:49 p.m.
    4:57 p.m.
    5:05 p.m.
    5:13 p.m.
    5:21 p.m.
    5:29 p.m.
    5:37 p.m.
    5:45 p.m.
    5:53 p.m.
    6:01 p.m.
    6:09 p.m.
    6:17 p.m.
    6:25 p.m.
    6:33 p.m.
    6:41 p.m.
    6:49 p.m.
    6:57 p.m.
    7:05 p.m.
    7:13 p.m.
    7:23 p.m.
    7:35 p.m.
    7:43 p.m.
    7:53 p.m.
    8:03 p.m.
    8:14 p.m.
    8:23 p.m.
    8:33 p.m.
    8:43 p.m.
    8:53 p.m.
    9:03 p.m.
    9:13 p.m.
    9:23 p.m.
    9:33 p.m.
    9:43 p.m.
    9:53 p.m.
    10:03 p.m.
    10:13 p.m.
    10:23 p.m.
    10:33 p.m.
    10:43 p.m.
    10:53 p.m.
    11:08 p.m.
    11:23 p.m.
    11:38 p.m.
    11:53 p.m.
    12:08 a.m.
    12:23 a.m.
    12:38 a.m.
    :
    No stop
    :
    No stop
    :
    No stop
    :
    No stop
    :
    No stop
    :
    No stop
    `,
  },
  seatac: {
    name: "SeaTac",
    latitude: 47.44377899169922,
    longitude: -122.30203247070312,
    northbound: `5:04 a.m.
    :
    No stop
    5:16 a.m.
    5:28 a.m.
    :
    No stop
    5:40 a.m.
    5:50 a.m.
    5:58 a.m.
    6:06 a.m.
    6:14 a.m.
    6:22 a.m.
    6:30 a.m.
    6:38 a.m.
    6:46 a.m.
    6:54 a.m.
    7:02 a.m.
    7:10 a.m.
    7:18 a.m.
    7:26 a.m.
    7:34 a.m.
    7:42 a.m.
    7:50 a.m.
    7:58 a.m.
    8:06 a.m.
    8:14 a.m.
    8:22 a.m.
    8:30 a.m.
    8:38 a.m.
    8:46 a.m.
    8:54 a.m.
    9:04 a.m.
    9:14 a.m.
    9:24 a.m.
    9:34 a.m.
    9:44 a.m.
    9:54 a.m.
    10:04 a.m.
    10:14 a.m.
    10:24 a.m.
    10:34 a.m.
    10:44 a.m.
    10:54 a.m.
    11:04 a.m.
    11:14 a.m.
    11:24 a.m.
    11:34 a.m.
    11:44 a.m.
    11:54 a.m.
    12:04 p.m.
    12:14 p.m.
    12:24 p.m.
    12:34 p.m.
    12:44 p.m.
    12:54 p.m.
    1:04 p.m.
    1:14 p.m.
    1:24 p.m.
    1:34 p.m.
    1:44 p.m.
    1:54 p.m.
    2:02 p.m.
    :
    No stop
    2:14 p.m.
    2:24 p.m.
    2:32 p.m.
    2:40 p.m.
    2:48 p.m.
    2:56 p.m.
    3:04 p.m.
    3:12 p.m.
    3:20 p.m.
    3:28 p.m.
    3:36 p.m.
    3:44 p.m.
    3:52 p.m.
    4:00 p.m.
    4:08 p.m.
    4:16 p.m.
    4:24 p.m.
    4:32 p.m.
    4:40 p.m.
    4:48 p.m.
    4:56 p.m.
    5:04 p.m.
    5:12 p.m.
    5:20 p.m.
    5:28 p.m.
    5:36 p.m.
    5:44 p.m.
    5:52 p.m.
    6:00 p.m.
    6:08 p.m.
    6:16 p.m.
    6:24 p.m.
    6:34 p.m.
    6:46 p.m.
    6:54 p.m.
    7:04 p.m.
    7:14 p.m.
    7:25 p.m.
    7:34 p.m.
    7:44 p.m.
    7:54 p.m.
    8:04 p.m.
    8:14 p.m.
    8:24 p.m.
    8:34 p.m.
    8:44 p.m.
    8:54 p.m.
    9:04 p.m.
    9:14 p.m.
    9:24 p.m.
    9:34 p.m.
    9:44 p.m.
    9:54 p.m.
    10:04 p.m.
    10:19 p.m.
    10:34 p.m.
    10:49 p.m.
    11:04 p.m.
    11:19 p.m.
    11:34 p.m.
    11:49 p.m.
    12:04 a.m.
    12:19 a.m.
    12:34 a.m.
    12:49 a.m.
    1:04 a.m.
    1:19 a.m.
    1:34 a.m.`,
    southbound: `4:50 a.m.
    5:02 a.m.
    5:11 a.m.
    5:24 a.m.
    5:33 a.m.
    5:38 a.m.
    5:44 a.m.
    5:56 a.m.
    6:03 a.m.
    6:08 a.m.
    6:20 a.m.
    6:27 a.m.
    6:32 a.m.
    6:44 a.m.
    6:52 a.m.
    7:00 a.m.
    7:08 a.m.
    7:16 a.m.
    7:24 a.m.
    7:32 a.m.
    7:40 a.m.
    7:48 a.m.
    7:56 a.m.
    8:04 a.m.
    8:12 a.m.
    8:20 a.m.
    8:28 a.m.
    8:36 a.m.
    8:44 a.m.
    8:52 a.m.
    9:00 a.m.
    9:08 a.m.
    9:16 a.m.
    9:24 a.m.
    9:32 a.m.
    9:40 a.m.
    9:48 a.m.
    9:56 a.m.
    10:04 a.m.
    10:12 a.m.
    10:20 a.m.
    10:32 a.m.
    10:42 a.m.
    10:52 a.m.
    11:02 a.m.
    11:12 a.m.
    11:22 a.m.
    11:32 a.m.
    11:42 a.m.
    11:52 a.m.
    12:02 p.m.
    12:12 p.m.
    12:22 p.m.
    12:32 p.m.
    12:42 p.m.
    12:52 p.m.
    1:02 p.m.
    1:12 p.m.
    1:22 p.m.
    1:32 p.m.
    1:42 p.m.
    1:52 p.m.
    2:02 p.m.
    2:12 p.m.
    2:22 p.m.
    2:32 p.m.
    2:37 p.m.
    2:42 p.m.
    2:52 p.m.
    3:02 p.m.
    3:12 p.m.
    3:17 p.m.
    3:22 p.m.
    3:32 p.m.
    3:42 p.m.
    3:50 p.m.
    3:58 p.m.
    4:06 p.m.
    4:14 p.m.
    4:22 p.m.
    4:30 p.m.
    4:38 p.m.
    4:46 p.m.
    4:54 p.m.
    5:02 p.m.
    5:10 p.m.
    5:18 p.m.
    5:26 p.m.
    5:34 p.m.
    5:42 p.m.
    5:50 p.m.
    5:58 p.m.
    6:06 p.m.
    6:14 p.m.
    6:22 p.m.
    6:30 p.m.
    6:38 p.m.
    6:46 p.m.
    6:54 p.m.
    7:02 p.m.
    7:10 p.m.
    7:18 p.m.
    7:26 p.m.
    7:34 p.m.
    7:42 p.m.
    7:53 p.m.
    8:03 p.m.
    8:12 p.m.
    8:22 p.m.
    8:32 p.m.
    8:42 p.m.
    8:52 p.m.
    9:02 p.m.
    9:12 p.m.
    9:22 p.m.
    9:32 p.m.
    9:42 p.m.
    9:52 p.m.
    10:02 p.m.
    10:12 p.m.
    10:22 p.m.
    10:32 p.m.
    10:42 p.m.
    10:52 p.m.
    11:02 p.m.
    11:17 p.m.
    11:32 p.m.
    11:47 p.m.
    12:02 a.m.
    12:17 a.m.
    12:32 a.m.
    12:47 a.m.
    1:02 a.m.
    1:17 a.m.`,
  },
  westlake: {
    name: "Westlake",
    latitude: 47.6095522,
    longitude: -122.3417792,
    northbound: `4:34 a.m.
    4:46 a.m.
    4:58 a.m.
    5:10 a.m.
    5:22 a.m.
    5:34 a.m.
    5:40 a.m.
    5:48 a.m.
    5:52 a.m.
    6:04 a.m.
    6:12 a.m.
    6:16 a.m.
    6:26 a.m.
    6:34 a.m.
    6:42 a.m.
    6:50 a.m.
    6:58 a.m.
    7:06 a.m.
    7:14 a.m.
    7:22 a.m.
    7:30 a.m.
    7:38 a.m.
    7:46 a.m.
    7:54 a.m.
    8:02 a.m.
    8:10 a.m.
    8:18 a.m.
    8:26 a.m.
    8:34 a.m.
    8:42 a.m.
    8:50 a.m.
    8:58 a.m.
    9:06 a.m.
    9:14 a.m.
    9:22 a.m.
    9:30 a.m.
    9:40 a.m.
    9:50 a.m.
    10:00 a.m.
    10:10 a.m.
    10:20 a.m.
    10:30 a.m.
    10:40 a.m.
    10:50 a.m.
    11:00 a.m.
    11:10 a.m.
    11:20 a.m.
    11:30 a.m.
    11:40 a.m.
    11:50 a.m.
    12:00 p.m.
    12:10 p.m.
    12:20 p.m.
    12:30 p.m.
    12:40 p.m.
    12:50 p.m.
    1:00 p.m.
    1:10 p.m.
    1:20 p.m.
    1:30 p.m.
    1:40 p.m.
    1:50 p.m.
    2:00 p.m.
    2:10 p.m.
    2:20 p.m.
    2:30 p.m.
    2:38 p.m.
    2:47 p.m.
    2:50 p.m.
    3:00 p.m.
    3:08 p.m.
    3:16 p.m.
    3:24 p.m.
    3:32 p.m.
    3:40 p.m.
    3:48 p.m.
    3:56 p.m.
    4:04 p.m.
    4:12 p.m.
    4:20 p.m.
    4:28 p.m.
    4:36 p.m.
    4:44 p.m.
    4:52 p.m.
    5:00 p.m.
    5:08 p.m.
    5:16 p.m.
    5:24 p.m.
    5:32 p.m.
    5:40 p.m.
    5:48 p.m.
    5:56 p.m.
    6:04 p.m.
    6:12 p.m.
    6:20 p.m.
    6:28 p.m.
    6:36 p.m.
    6:44 p.m.
    6:52 p.m.
    7:00 p.m.
    7:10 p.m.
    7:22 p.m.
    7:30 p.m.
    7:40 p.m.
    7:50 p.m.
    8:01 p.m.
    8:10 p.m.
    8:20 p.m.
    8:30 p.m.
    8:40 p.m.
    8:50 p.m.
    9:00 p.m.
    9:10 p.m.
    9:20 p.m.
    9:30 p.m.
    9:40 p.m.
    9:50 p.m.
    10:00 p.m.
    10:10 p.m.
    10:20 p.m.
    10:30 p.m.
    10:40 p.m.
    10:55 p.m.
    11:10 p.m.
    11:25 p.m.
    11:40 p.m.
    11:55 p.m.
    12:10 a.m.
    12:25 a.m.
    :
    No stop
    :
    No stop
    :
    No stop
    :
    No stop
    `,
    southbound: `4:54 a.m.
    :
    No stop
    5:08 a.m.
    5:20 a.m.
    :
    No stop
    5:32 a.m.
    5:44 a.m.
    :
    No stop
    5:56 a.m.
    6:08 a.m.
    6:16 a.m.
    6:24 a.m.
    6:32 a.m.
    6:40 a.m.
    6:48 a.m.
    6:56 a.m.
    7:04 a.m.
    7:12 a.m.
    7:20 a.m.
    7:28 a.m.
    7:36 a.m.
    7:44 a.m.
    7:52 a.m.
    8:00 a.m.
    8:08 a.m.
    8:16 a.m.
    8:24 a.m.
    8:32 a.m.
    8:40 a.m.
    8:48 a.m.
    8:56 a.m.
    9:04 a.m.
    9:12 a.m.
    9:20 a.m.
    9:28 a.m.
    9:36 a.m.
    9:44 a.m.
    9:56 a.m.
    10:06 a.m.
    10:16 a.m.
    10:26 a.m.
    10:36 a.m.
    10:46 a.m.
    10:56 a.m.
    11:06 a.m.
    11:16 a.m.
    11:26 a.m.
    11:36 a.m.
    11:46 a.m.
    11:56 a.m.
    12:06 p.m.
    12:16 p.m.
    12:26 p.m.
    12:36 p.m.
    12:46 p.m.
    12:56 p.m.
    1:06 p.m.
    1:16 p.m.
    1:26 p.m.
    1:36 p.m.
    1:46 p.m.
    1:56 p.m.
    :
    No stop
    2:06 p.m.
    2:16 p.m.
    2:26 p.m.
    2:36 p.m.
    :
    No stop
    2:46 p.m.
    2:56 p.m.
    3:06 p.m.
    3:14 p.m.
    3:22 p.m.
    3:30 p.m.
    3:38 p.m.
    3:46 p.m.
    3:54 p.m.
    4:02 p.m.
    4:10 p.m.
    4:18 p.m.
    4:26 p.m.
    4:34 p.m.
    4:42 p.m.
    4:50 p.m.
    4:58 p.m.
    5:06 p.m.
    5:14 p.m.
    5:22 p.m.
    5:30 p.m.
    5:38 p.m.
    5:46 p.m.
    5:54 p.m.
    6:02 p.m.
    6:10 p.m.
    6:18 p.m.
    6:26 p.m.
    6:34 p.m.
    6:42 p.m.
    6:50 p.m.
    6:58 p.m.
    7:06 p.m.
    7:17 p.m.
    7:27 p.m.
    7:36 p.m.
    7:46 p.m.
    7:56 p.m.
    8:06 p.m.
    8:16 p.m.
    8:26 p.m.
    8:36 p.m.
    8:46 p.m.
    8:56 p.m.
    9:06 p.m.
    9:16 p.m.
    9:26 p.m.
    9:36 p.m.
    9:46 p.m.
    9:56 p.m.
    10:06 p.m.
    10:16 p.m.
    10:26 p.m.
    10:41 p.m.
    10:56 p.m.
    11:11 p.m.
    11:26 p.m.
    11:41 p.m.
    11:56 p.m.
    12:11 a.m.
    12:26 a.m.
    12:41 a.m.`,
  },
  university: {
    name: "University St",
    latitude: 47.60704803466797,
    longitude: -122.33531951904297,
    northbound: `4:32 a.m.
    4:44 a.m.
    4:56 a.m.
    5:08 a.m.
    5:20 a.m.
    5:32 a.m.
    5:38 a.m.
    5:46 a.m.
    5:50 a.m.
    6:02 a.m.
    6:10 a.m.
    6:14 a.m.
    6:24 a.m.
    6:32 a.m.
    6:40 a.m.
    6:48 a.m.
    6:56 a.m.
    7:04 a.m.
    7:12 a.m.
    7:20 a.m.
    7:28 a.m.
    7:36 a.m.
    7:44 a.m.
    7:52 a.m.
    8:00 a.m.
    8:08 a.m.
    8:16 a.m.
    8:24 a.m.
    8:32 a.m.
    8:40 a.m.
    8:48 a.m.
    8:56 a.m.
    9:04 a.m.
    9:12 a.m.
    9:20 a.m.
    9:28 a.m.
    9:38 a.m.
    9:48 a.m.
    9:58 a.m.
    10:08 a.m.
    10:18 a.m.
    10:28 a.m.
    10:38 a.m.
    10:48 a.m.
    10:58 a.m.
    11:08 a.m.
    11:18 a.m.
    11:28 a.m.
    11:38 a.m.
    11:48 a.m.
    11:58 a.m.
    12:08 p.m.
    12:18 p.m.
    12:28 p.m.
    12:38 p.m.
    12:48 p.m.
    12:58 p.m.
    1:08 p.m.
    1:18 p.m.
    1:28 p.m.
    1:38 p.m.
    1:48 p.m.
    1:58 p.m.
    2:08 p.m.
    2:18 p.m.
    2:28 p.m.
    2:36 p.m.
    2:45 p.m.
    2:48 p.m.
    2:58 p.m.
    3:06 p.m.
    3:14 p.m.
    3:22 p.m.
    3:30 p.m.
    3:38 p.m.
    3:46 p.m.
    3:54 p.m.
    4:02 p.m.
    4:10 p.m.
    4:18 p.m.
    4:26 p.m.
    4:34 p.m.
    4:42 p.m.
    4:50 p.m.
    4:58 p.m.
    5:06 p.m.
    5:14 p.m.
    5:22 p.m.
    5:30 p.m.
    5:38 p.m.
    5:46 p.m.
    5:54 p.m.
    6:02 p.m.
    6:10 p.m.
    6:18 p.m.
    6:26 p.m.
    6:34 p.m.
    6:42 p.m.
    6:50 p.m.
    6:58 p.m.
    7:08 p.m.
    7:20 p.m.
    7:28 p.m.
    7:38 p.m.
    7:48 p.m.
    7:59 p.m.
    8:08 p.m.
    8:18 p.m.
    8:28 p.m.
    8:38 p.m.
    8:48 p.m.
    8:58 p.m.
    9:08 p.m.
    9:18 p.m.
    9:28 p.m.
    9:38 p.m.
    9:48 p.m.
    9:58 p.m.
    10:08 p.m.
    10:18 p.m.
    10:28 p.m.
    10:38 p.m.
    10:53 p.m.
    11:08 p.m.
    11:23 p.m.
    11:38 p.m.
    11:53 p.m.
    12:08 a.m.
    12:23 a.m.
    :
    No stop
    :
    No stop
    :
    No stop
    :
    No stop
    :
    No stop
    `,
    southbound: `4:57 a.m.
    :
    No stop
    5:10 a.m.
    5:22 a.m.
    :
    No stop
    5:34 a.m.
    5:46 a.m.
    :
    No stop
    5:58 a.m.
    6:10 a.m.
    6:18 a.m.
    6:26 a.m.
    6:34 a.m.
    6:42 a.m.
    6:50 a.m.
    6:58 a.m.
    7:06 a.m.
    7:14 a.m.
    7:22 a.m.
    7:30 a.m.
    7:38 a.m.
    7:46 a.m.
    7:54 a.m.
    8:02 a.m.
    8:10 a.m.
    8:18 a.m.
    8:26 a.m.
    8:34 a.m.
    8:42 a.m.
    8:50 a.m.
    8:58 a.m.
    9:06 a.m.
    9:14 a.m.
    9:22 a.m.
    9:30 a.m.
    9:38 a.m.
    9:46 a.m.
    9:58 a.m.
    10:08 a.m.
    10:18 a.m.
    10:28 a.m.
    10:38 a.m.
    10:48 a.m.
    10:58 a.m.
    11:08 a.m.
    11:18 a.m.
    11:28 a.m.
    11:38 a.m.
    11:48 a.m.
    11:58 a.m.
    12:08 p.m.
    12:18 p.m.
    12:28 p.m.
    12:38 p.m.
    12:48 p.m.
    12:58 p.m.
    1:08 p.m.
    1:18 p.m.
    1:28 p.m.
    1:38 p.m.
    1:48 p.m.
    1:58 p.m.
    :
    No stop
    2:08 p.m.
    2:18 p.m.
    2:28 p.m.
    2:38 p.m.
    :
    No stop
    2:48 p.m.
    2:58 p.m.
    3:08 p.m.
    3:16 p.m.
    3:24 p.m.
    3:32 p.m.
    3:40 p.m.
    3:48 p.m.
    3:56 p.m.
    4:04 p.m.
    4:12 p.m.
    4:20 p.m.
    4:28 p.m.
    4:36 p.m.
    4:44 p.m.
    4:52 p.m.
    5:00 p.m.
    5:08 p.m.
    5:16 p.m.
    5:24 p.m.
    5:32 p.m.
    5:40 p.m.
    5:48 p.m.
    5:56 p.m.
    6:04 p.m.
    6:12 p.m.
    6:20 p.m.
    6:28 p.m.
    6:36 p.m.
    6:44 p.m.
    6:52 p.m.
    7:00 p.m.
    7:08 p.m.
    7:19 p.m.
    7:29 p.m.
    7:38 p.m.
    7:48 p.m.
    7:58 p.m.
    8:08 p.m.
    8:18 p.m.
    8:28 p.m.
    8:38 p.m.
    8:48 p.m.
    8:58 p.m.
    9:08 p.m.
    9:18 p.m.
    9:28 p.m.
    9:38 p.m.
    9:48 p.m.
    9:58 p.m.
    10:08 p.m.
    10:18 p.m.
    10:28 p.m.
    10:43 p.m.
    10:58 p.m.
    11:13 p.m.
    11:28 p.m.
    11:43 p.m.
    11:58 p.m.
    12:13 a.m.
    12:28 a.m.
    12:43 a.m.`,
  },
  pioneer: {
    name: "Pioneer Square",
    latitude: 47.6021771,
    longitude: -122.3310393,
    southbound: `4:59 a.m.
    :
    No stop
    5:11 a.m.
    5:23 a.m.
    :
    No stop
    5:35 a.m.
    5:47 a.m.
    :
    No stop
    5:59 a.m.
    6:11 a.m.
    6:19 a.m.
    6:27 a.m.
    6:35 a.m.
    6:43 a.m.
    6:51 a.m.
    6:59 a.m.
    7:07 a.m.
    7:15 a.m.
    7:23 a.m.
    7:31 a.m.
    7:39 a.m.
    7:47 a.m.
    7:55 a.m.
    8:03 a.m.
    8:11 a.m.
    8:19 a.m.
    8:27 a.m.
    8:35 a.m.
    8:43 a.m.
    8:51 a.m.
    8:59 a.m.
    9:07 a.m.
    9:15 a.m.
    9:23 a.m.
    9:31 a.m.
    9:39 a.m.
    9:47 a.m.
    9:59 a.m.
    10:09 a.m.
    10:19 a.m.
    10:29 a.m.
    10:39 a.m.
    10:49 a.m.
    10:59 a.m.
    11:09 a.m.
    11:19 a.m.
    11:29 a.m.
    11:39 a.m.
    11:49 a.m.
    11:59 a.m.
    12:09 p.m.
    12:19 p.m.
    12:29 p.m.
    12:39 p.m.
    12:49 p.m.
    12:59 p.m.
    1:09 p.m.
    1:19 p.m.
    1:29 p.m.
    1:39 p.m.
    1:49 p.m.
    1:59 p.m.
    :
    No stop
    2:09 p.m.
    2:19 p.m.
    2:29 p.m.
    2:39 p.m.
    :
    No stop
    2:49 p.m.
    2:59 p.m.
    3:09 p.m.
    3:17 p.m.
    3:25 p.m.
    3:33 p.m.
    3:41 p.m.
    3:49 p.m.
    3:57 p.m.
    4:05 p.m.
    4:13 p.m.
    4:21 p.m.
    4:29 p.m.
    4:37 p.m.
    4:45 p.m.
    4:53 p.m.
    5:01 p.m.
    5:09 p.m.
    5:17 p.m.
    5:25 p.m.
    5:33 p.m.
    5:41 p.m.
    5:49 p.m.
    5:57 p.m.
    6:05 p.m.
    6:13 p.m.
    6:21 p.m.
    6:29 p.m.
    6:37 p.m.
    6:45 p.m.
    6:53 p.m.
    7:01 p.m.
    7:09 p.m.
    7:20 p.m.
    7:30 p.m.
    7:39 p.m.
    7:49 p.m.
    7:59 p.m.
    8:09 p.m.
    8:19 p.m.
    8:29 p.m.
    8:39 p.m.
    8:49 p.m.
    8:59 p.m.
    9:09 p.m.
    9:19 p.m.
    9:29 p.m.
    9:39 p.m.
    9:49 p.m.
    9:59 p.m.
    10:09 p.m.
    10:19 p.m.
    10:29 p.m.
    10:44 p.m.
    10:59 p.m.
    11:14 p.m.
    11:29 p.m.
    11:44 p.m.
    11:59 p.m.
    12:14 a.m.
    12:29 a.m.
    12:44 a.m.`,
    northbound: `	
    4:31 a.m.
    4:43 a.m.
    4:55 a.m.
    5:07 a.m.
    5:19 a.m.
    5:31 a.m.
    5:37 a.m.
    5:45 a.m.
    5:49 a.m.
    6:01 a.m.
    6:09 a.m.
    6:13 a.m.
    6:23 a.m.
    6:31 a.m.
    6:39 a.m.
    6:47 a.m.
    6:55 a.m.
    7:03 a.m.
    7:11 a.m.
    7:19 a.m.
    7:27 a.m.
    7:35 a.m.
    7:43 a.m.
    7:51 a.m.
    7:59 a.m.
    8:07 a.m.
    8:15 a.m.
    8:23 a.m.
    8:31 a.m.
    8:39 a.m.
    8:47 a.m.
    8:55 a.m.
    9:03 a.m.
    9:11 a.m.
    9:19 a.m.
    9:27 a.m.
    9:37 a.m.
    9:47 a.m.
    9:57 a.m.
    10:07 a.m.
    10:17 a.m.
    10:27 a.m.
    10:37 a.m.
    10:47 a.m.
    10:57 a.m.
    11:07 a.m.
    11:17 a.m.
    11:27 a.m.
    11:37 a.m.
    11:47 a.m.
    11:57 a.m.
    12:07 p.m.
    12:17 p.m.
    12:27 p.m.
    12:37 p.m.
    12:47 p.m.
    12:57 p.m.
    1:07 p.m.
    1:17 p.m.
    1:27 p.m.
    1:37 p.m.
    1:47 p.m.
    1:57 p.m.
    2:07 p.m.
    2:17 p.m.
    2:27 p.m.
    2:35 p.m.
    2:44 p.m.
    2:47 p.m.
    2:57 p.m.
    3:05 p.m.
    3:13 p.m.
    3:21 p.m.
    3:29 p.m.
    3:37 p.m.
    3:45 p.m.
    3:53 p.m.
    4:01 p.m.
    4:09 p.m.
    4:17 p.m.
    4:25 p.m.
    4:33 p.m.
    4:41 p.m.
    4:49 p.m.
    4:57 p.m.
    5:05 p.m.
    5:13 p.m.
    5:21 p.m.
    5:29 p.m.
    5:37 p.m.
    5:45 p.m.
    5:53 p.m.
    6:01 p.m.
    6:09 p.m.
    6:17 p.m.
    6:25 p.m.
    6:33 p.m.
    6:41 p.m.
    6:49 p.m.
    6:57 p.m.
    7:07 p.m.
    7:19 p.m.
    7:27 p.m.
    7:37 p.m.
    7:47 p.m.
    7:58 p.m.
    8:07 p.m.
    8:17 p.m.
    8:27 p.m.
    8:37 p.m.
    8:47 p.m.
    8:57 p.m.
    9:07 p.m.
    9:17 p.m.
    9:27 p.m.
    9:37 p.m.
    9:47 p.m.
    9:57 p.m.
    10:07 p.m.
    10:17 p.m.
    10:27 p.m.
    10:37 p.m.
    10:52 p.m.
    11:07 p.m.
    11:22 p.m.
    11:37 p.m.
    11:52 p.m.
    12:07 a.m.
    12:22 a.m.`,
  },
};

let widget = await createWidget();

// Check where the script is running
if (config.runsInWidget) {
  // Runs inside a widget so add it to the homescreen widget
  Script.setWidget(widget);
} else {
  // Show the medium widget inside the app
  widget.presentSmall();
}
Script.complete();

async function createWidget() {
  // Create new empty ListWidget instance
  let listwidget = new ListWidget(); // Set new background color

  let startColor = new Color(
    Device.isUsingDarkAppearance() ? "#414141" : "#7b4397"
  );
  let endColor = new Color(
    Device.isUsingDarkAppearance() ? "#000000" : "#dc2430"
  );
  let gradient = new LinearGradient();
  gradient.colors = [startColor, endColor];
  gradient.locations = [0.0, 1];

  listwidget.backgroundGradient = gradient;

  let location = await getLocation();
  location = location || "caphill";
  const l = geoLocationMap[location];
  let heading = listwidget.addText(`🚆 ${l.name} Station`);
  heading.centerAlignText();
  heading.font = Font.lightSystemFont(20);
  heading.textColor = new Color("#ffffff"); // Spacer between heading and launch date
  listwidget.addSpacer(16);

  addText(listwidget, "NORTHBOUND");
  addTimes(listwidget, l.northbound);

  listwidget.addSpacer(4);

  addText(listwidget, "SOUTHBOUND");
  addTimes(listwidget, l.southbound);

  return listwidget;
}

function addText(listwidget, text) {
  let body = listwidget.addText(text);
  body.centerAlignText();
  body.font = Font.semiboldSystemFont(14);
  body.textColor = new Color("#ffffff");
}

function addTimes(listwidget, times) {
  const [time, nextTime] = getClosestTime(times);
  let body = listwidget.addText(`${time} | ${nextTime}`);
  body.centerAlignText();
  body.font = Font.lightSystemFont(11);
  body.textColor = new Color("#ffffff");
}

function getClosestTime(inputTimes) {
  const lines = inputTimes.split("\n");
  const trimmedLines = lines.map((line) => line.trim());
  const filteredTimes = trimmedLines.filter(
    (line) => line !== ":" && line !== "No stop"
  );

  // parse 3:52 p.m. into [15,52]
  const times = filteredTimes.map((e) => {
    const split = e.split(" ");
    const time = split[0].split(":");
    let [hours, minutes] = [parseInt(time[0]), parseInt(time[1])];
    if (split[1] === "p.m.") hours += 12;
    return [hours, minutes];
  });

  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  // find closest time
  let minDiff = Number.MAX_SAFE_INTEGER;
  let closestTimeIndex = 0;
  times.forEach((time, i) => {
    const nowInMins = hour * 60 + minute;
    const timeInMins = time[0] * 60 + time[1];
    const diff = timeInMins - nowInMins;
    if (diff < minDiff && diff > 0) {
      minDiff = diff;
      closestTimeIndex = i;
    }
  });
  const closestTime = times[closestTimeIndex];
  const nextClosestTime = times[(closestTimeIndex + 1) % times.length];

  function formatTime(time) {
    const d = new Date();
    d.setHours(time[0], time[1]);
    const dTime = d.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const timeAgo = timeSince(d);
    return `${dTime} (${timeAgo})`;
  }
  return [formatTime(closestTime), formatTime(nextClosestTime)];
}

// https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
function timeSince(date) {
  var seconds = Math.floor((date - new Date()) / 1000);
  var interval = seconds / 31536000;
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  return Math.floor(interval) + " minutes";
}

// https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates
function calcCrow(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

// Get the closest light rail station based on geo coordinates
async function getLocation() {
  Location.setAccuracyToHundredMeters();
  let location;
  try {
    location = await Location.current();
  } catch (error) {
    // default to the lyric
    location = { latitude: 47.620537, longitude: -122.320814 };
  }

  let locationName = "";
  let minDistance = Number.MAX_SAFE_INTEGER;
  for (const place of Object.keys(geoLocationMap)) {
    const distance = calcCrow(
      location.latitude,
      location.longitude,
      geoLocationMap[place].latitude,
      geoLocationMap[place].longitude
    );
    if (distance < minDistance) {
      locationName = place;
      minDistance = distance;
    }
  }

  return locationName;
}
