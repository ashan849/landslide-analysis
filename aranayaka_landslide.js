/* ================================================================
   ARANAYAKA LANDSLIDE (event: 17 May 2016) — Sentinel-2 Pre/Post
   Google Earth Engine script — Code Editor (code.earthengine.google.com)

   Mirrors your QGIS workflow (Steps 1–8). Each block below is
   labelled with its QGIS-equivalent step so you can write your
   methodology describing BOTH paths consistently.
   ================================================================ */

// ============================================================
// STEP 0 — AOI (your Aranayaka shapefile)
// QGIS equivalent: Step 2 boundary layer (your own shapefile,
// used instead of/along with GADM district boundary)
// ============================================================

// We have extracted the boundary from your 'aranayakat' shapefile
// and formatted it below as an inline ee.Geometry.Polygon so that
// this script can be run immediately out-of-the-box in the GEE Code Editor.
var inlineGeometry = ee.Geometry.Polygon([
[
    [80.456551, 7.092074], [80.442223, 7.090495], [80.436066, 7.092642], [80.434662, 7.094887],
    [80.431946, 7.09797], [80.426132, 7.102002], [80.425346, 7.102164], [80.424545, 7.102164],
    [80.423683, 7.102137], [80.422821, 7.102166], [80.421944, 7.102066], [80.421143, 7.102068],
    [80.420326, 7.102273], [80.419899, 7.103089], [80.4198, 7.103962], [80.418999, 7.10424],
    [80.418648, 7.103468], [80.418556, 7.102624], [80.418076, 7.101943], [80.41729, 7.102016],
    [80.416473, 7.102191], [80.415871, 7.102745], [80.41507, 7.10295], [80.415009, 7.102091],
    [80.414238, 7.101918], [80.413406, 7.102226], [80.412643, 7.102547], [80.411888, 7.102893],
    [80.41124, 7.103345], [80.410545, 7.103851], [80.40992, 7.104445], [80.409286, 7.104938],
    [80.408646, 7.105492], [80.408081, 7.106148], [80.407654, 7.106832], [80.407166, 7.107183],
    [80.406708, 7.107639], [80.406242, 7.108555], [80.405327, 7.110383], [80.40538, 7.113817],
    [80.406189, 7.114152], [80.40667, 7.114804], [80.407356, 7.115196], [80.408066, 7.115588],
    [80.408844, 7.11598], [80.409439, 7.116591], [80.410141, 7.11704], [80.410637, 7.117664],
    [80.410973, 7.118392], [80.411079, 7.119192], [80.411003, 7.119991], [80.410789, 7.120748],
    [80.410423, 7.121534], [80.410072, 7.122307], [80.409637, 7.122963], [80.409172, 7.123618],
    [80.408661, 7.124244], [80.408188, 7.124898], [80.407867, 7.125626], [80.407608, 7.126398],
    [80.407478, 7.127257], [80.407539, 7.128071], [80.407593, 7.128914], [80.407623, 7.129744],
    [80.407928, 7.130501], [80.40815, 7.131285], [80.408226, 7.132071], [80.408371, 7.132944],
    [80.408592, 7.133903], [80.408623, 7.134703], [80.408707, 7.135576], [80.408813, 7.13639],
    [80.408768, 7.137206], [80.408592, 7.137992], [80.408241, 7.138762], [80.40789, 7.139519],
    [80.407532, 7.140349], [80.407059, 7.141005], [80.40654, 7.141732], [80.406097, 7.142389],
    [80.405647, 7.143059], [80.40506, 7.143772], [80.404701, 7.144558], [80.404732, 7.145402],
    [80.404976, 7.146202], [80.405037, 7.147015], [80.404976, 7.147904], [80.404877, 7.148804],
    [80.404747, 7.149677], [80.404572, 7.150493], [80.404472, 7.151382], [80.404221, 7.152182],
    [80.403854, 7.153041], [80.403534, 7.153784], [80.403244, 7.154555], [80.402985, 7.155341],
    [80.402603, 7.156141], [80.402168, 7.156943], [80.401711, 7.157743], [80.401306, 7.15844],
    [80.401192, 7.159243], [80.401031, 7.160013], [80.401237, 7.160843], [80.401833, 7.161378],
    [80.402603, 7.1617], [80.403427, 7.16193], [80.404137, 7.162322], [80.404549, 7.163079],
    [80.405121, 7.163687], [80.405777, 7.164195], [80.406082, 7.164938], [80.406052, 7.165736],
    [80.406067, 7.166566], [80.406143, 7.167425], [80.406059, 7.168239], [80.406219, 7.169025],
    [80.40641, 7.169795], [80.405869, 7.170408], [80.405426, 7.171092], [80.40493, 7.171762],
    [80.404144, 7.171849], [80.403328, 7.171837], [80.402481, 7.17191], [80.401726, 7.172275],
    [80.401413, 7.173018], [80.401901, 7.173686], [80.402611, 7.174064], [80.403404, 7.17431],
    [80.40406, 7.174802], [80.404587, 7.175429], [80.405388, 7.175659], [80.40625, 7.1757],
    [80.407013, 7.176006], [80.407883, 7.176063], [80.408707, 7.176004], [80.408936, 7.17676],
    [80.408516, 7.17743], [80.407913, 7.178144], [80.407242, 7.178595], [80.406662, 7.179162],
    [80.406006, 7.179689], [80.405289, 7.180038], [80.404541, 7.180402], [80.403847, 7.180826],
    [80.403114, 7.181205], [80.402458, 7.181672], [80.401787, 7.182182], [80.401146, 7.182677],
    [80.400368, 7.183014], [80.399673, 7.183452], [80.398956, 7.183933], [80.3983, 7.18437],
    [80.397682, 7.184951], [80.396927, 7.185419], [80.396385, 7.186002], [80.395821, 7.186558],
    [80.395187, 7.187037], [80.394623, 7.187677], [80.394211, 7.188523], [80.393936, 7.189264],
    [80.393616, 7.190022], [80.393135, 7.190706], [80.392609, 7.191303], [80.392143, 7.192017],
    [80.391861, 7.19276], [80.391663, 7.193573], [80.391602, 7.194389], [80.391556, 7.195203],
    [80.391708, 7.195989], [80.391953, 7.196746], [80.392273, 7.19753], [80.392639, 7.198243],
    [80.393105, 7.198998], [80.393501, 7.199711], [80.393929, 7.200452], [80.394249, 7.201252],
    [80.394684, 7.201977], [80.394997, 7.202735], [80.39521, 7.20352], [80.395256, 7.204392],
    [80.395241, 7.205222], [80.395218, 7.206049], [80.395126, 7.206879], [80.394951, 7.207738],
    [80.394737, 7.208581], [80.394485, 7.209381], [80.394257, 7.210184], [80.39402, 7.210954],
    [80.393761, 7.21174], [80.393394, 7.212454], [80.392967, 7.213153], [80.392677, 7.21391],
    [80.392471, 7.214696], [80.392464, 7.215494], [80.392693, 7.21634], [80.392799, 7.217169],
    [80.392693, 7.218013], [80.392654, 7.218826], [80.39283, 7.219612], [80.393105, 7.220369],
    [80.393471, 7.22108], [80.393761, 7.221894], [80.393951, 7.222737], [80.394096, 7.223567],
    [80.394112, 7.224426], [80.394073, 7.225269], [80.393883, 7.226056], [80.394745, 7.226199],
    [80.395576, 7.22611], [80.396378, 7.226008], [80.397179, 7.226208], [80.398056, 7.226325],
    [80.398933, 7.226395], [80.399826, 7.226293], [80.400673, 7.226306], [80.401459, 7.226625],
    [80.402176, 7.226988], [80.403023, 7.227364], [80.403793, 7.227683], [80.404572, 7.227988],
    [80.405434, 7.228219], [80.406219, 7.228435], [80.407013, 7.228668], [80.407738, 7.229016],
    [80.408569, 7.229392], [80.409393, 7.229652], [80.410278, 7.22955], [80.41111, 7.22952],
    [80.411812, 7.229896], [80.412689, 7.230245], [80.413452, 7.230504], [80.414314, 7.230707],
    [80.415115, 7.230792], [80.415932, 7.230646], [80.416748, 7.230454], [80.417511, 7.230163],
    [80.418266, 7.229887], [80.419044, 7.229652], [80.41983, 7.22955], [80.420609, 7.22975],
    [80.421364, 7.230026], [80.422211, 7.229894], [80.423012, 7.229805], [80.423843, 7.229905],
    [80.424461, 7.2304], [80.425087, 7.230995], [80.425919, 7.231138], [80.426712, 7.230803],
    [80.427322, 7.23022], [80.427643, 7.229493], [80.427818, 7.228693], [80.427917, 7.22782],
    [80.428062, 7.22702], [80.428192, 7.226217], [80.428329, 7.225345], [80.428314, 7.224531],
    [80.428192, 7.223688], [80.427696, 7.223063], [80.427124, 7.222306], [80.426628, 7.221609],
    [80.426079, 7.220925], [80.425636, 7.220198], [80.425316, 7.219473], [80.425095, 7.218673],
    [80.42495, 7.21783], [80.425095, 7.217001], [80.425575, 7.216331], [80.42617, 7.215777],
    [80.426834, 7.215253], [80.427414, 7.214712], [80.427895, 7.214029], [80.428261, 7.213213],
    [80.428391, 7.212383], [80.428391, 7.21151], [80.42836, 7.21071], [80.428596, 7.209924],
    [80.429161, 7.209327], [80.42997, 7.209254], [80.430817, 7.209165], [80.431671, 7.209222],
    [80.432495, 7.209233], [80.433327, 7.209306], [80.434113, 7.209523], [80.434944, 7.209682],
    [80.435738, 7.209944], [80.436493, 7.210188], [80.437325, 7.210448], [80.438087, 7.210694],
    [80.438904, 7.210911], [80.439651, 7.211173], [80.440407, 7.211476], [80.440742, 7.212276],
    [80.440727, 7.213133], [80.441223, 7.213817], [80.441902, 7.214325], [80.441887, 7.21517],
    [80.441566, 7.215998], [80.44133, 7.216814], [80.441277, 7.217657], [80.441406, 7.218457],
    [80.441856, 7.219111], [80.442604, 7.219473], [80.44342, 7.219822], [80.443977, 7.220403],
    [80.444557, 7.221042], [80.444984, 7.221812], [80.44558, 7.22242], [80.446358, 7.222755],
    [80.446945, 7.223293], [80.447495, 7.223859], [80.448273, 7.224018], [80.44915, 7.223813],
    [80.449936, 7.223635], [80.450798, 7.223735], [80.451614, 7.224055], [80.452255, 7.224592],
    [80.452606, 7.225376], [80.452759, 7.226206], [80.452759, 7.227065], [80.453484, 7.227441],
    [80.45433, 7.227617], [80.455177, 7.227861], [80.456024, 7.227961], [80.456833, 7.227842],
    [80.45768, 7.227464], [80.458374, 7.226983], [80.45903, 7.226457], [80.459679, 7.225919],
    [80.460403, 7.225538], [80.461266, 7.225509], [80.461998, 7.225914], [80.462654, 7.226539],
    [80.463432, 7.226974], [80.464333, 7.227061], [80.465111, 7.226796], [80.465912, 7.226445],
    [80.466377, 7.225775], [80.466682, 7.224991], [80.466888, 7.224175], [80.466888, 7.223346],
    [80.466873, 7.222532], [80.467209, 7.221673], [80.467926, 7.221133], [80.468666, 7.220741],
    [80.469452, 7.220679], [80.470261, 7.220474], [80.470985, 7.220123], [80.471779, 7.219715],
    [80.472565, 7.219291], [80.473297, 7.21897], [80.474113, 7.218708], [80.474976, 7.218532],
    [80.475731, 7.218238], [80.476387, 7.217744], [80.477005, 7.217074], [80.477409, 7.216374],
    [80.477493, 7.21556], [80.477806, 7.214801], [80.478111, 7.214001], [80.47818, 7.213185],
    [80.478325, 7.212312], [80.478722, 7.211572], [80.479233, 7.210945], [80.479889, 7.210289],
    [80.480499, 7.209662], [80.480881, 7.208964], [80.481346, 7.208221], [80.481758, 7.207535],
    [80.482132, 7.206822], [80.482437, 7.205979], [80.482483, 7.205149], [80.482368, 7.204276],
    [80.481956, 7.203463], [80.481285, 7.202881], [80.480522, 7.202359], [80.479805, 7.202011],
    [80.47892, 7.201737], [80.478058, 7.201578], [80.477257, 7.20142], [80.476494, 7.201131],
    [80.475647, 7.200942], [80.474831, 7.200855], [80.474014, 7.200844], [80.47303, 7.200787],
    [80.472168, 7.200773], [80.471336, 7.200819], [80.47049, 7.200805], [80.46962, 7.200648],
    [80.468872, 7.200372], [80.468071, 7.19995], [80.467575, 7.199312], [80.467224, 7.198556],
    [80.467102, 7.197772], [80.467262, 7.196999], [80.467537, 7.196215], [80.467903, 7.195442],
    [80.46817, 7.194613], [80.468193, 7.193813], [80.468018, 7.192983], [80.467758, 7.192185],
    [80.467796, 7.191369], [80.468277, 7.190683], [80.46888, 7.19], [80.469376, 7.1893],
    [80.46994, 7.188603], [80.470291, 7.18786], [80.470642, 7.187044], [80.471283, 7.18649],
    [80.471901, 7.185979], [80.472466, 7.185353], [80.472862, 7.184639], [80.473068, 7.183826],
    [80.473412, 7.183083], [80.473763, 7.182296], [80.474228, 7.181626], [80.474815, 7.18097],
    [80.47541, 7.180373], [80.476158, 7.180022], [80.476944, 7.179919], [80.477745, 7.180136],
    [80.478523, 7.180541], [80.479324, 7.180817], [80.480232, 7.18105], [80.481018, 7.181104],
    [80.481812, 7.180972], [80.482552, 7.180667], [80.483192, 7.180199], [80.483879, 7.179805],
    [80.484535, 7.179338], [80.485046, 7.178552], [80.485657, 7.177795], [80.486359, 7.177341],
    [80.487, 7.176701], [80.487366, 7.175931], [80.487633, 7.175172], [80.488228, 7.174474],
    [80.488594, 7.173775], [80.488914, 7.172945], [80.489029, 7.172159], [80.488937, 7.171345],
    [80.488533, 7.170618], [80.487976, 7.170037], [80.487816, 7.169191], [80.487549, 7.16838],
    [80.487534, 7.167521], [80.487564, 7.166677], [80.487724, 7.165775], [80.487984, 7.164916],
    [80.48835, 7.164188], [80.488762, 7.163459], [80.489326, 7.162862], [80.490028, 7.162395],
    [80.490959, 7.16219], [80.491768, 7.162247], [80.49263, 7.16242], [80.493416, 7.16262],
    [80.494232, 7.162766], [80.49511, 7.162648], [80.495987, 7.162732], [80.496788, 7.162791],
    [80.497574, 7.16257], [80.498337, 7.162338], [80.499039, 7.161916], [80.499458, 7.161055],
    [80.499886, 7.160298], [80.500305, 7.159582], [80.50061, 7.158798], [80.50087, 7.157953],
    [80.501167, 7.157109], [80.501381, 7.156193], [80.501511, 7.155304], [80.501892, 7.154488],
    [80.502594, 7.153878], [80.503281, 7.15341], [80.503906, 7.15287], [80.504593, 7.152346],
    [80.50531, 7.151908], [80.506096, 7.151674], [80.506943, 7.151512], [80.507805, 7.151407],
    [80.50856, 7.151161], [80.509377, 7.15081], [80.510139, 7.150356], [80.510765, 7.149876],
    [80.511078, 7.14947], [80.5103, 7.148975], [80.509872, 7.148292], [80.509613, 7.147551],
    [80.509605, 7.146678], [80.509827, 7.145835], [80.509758, 7.145014], [80.509735, 7.144045],
    [80.510025, 7.143348], [80.509865, 7.142546], [80.509689, 7.141746], [80.509323, 7.141017],
    [80.508636, 7.140235], [80.508316, 7.139749], [80.507652, 7.138999], [80.50708, 7.138478],
    [80.506554, 7.137766], [80.506546, 7.136891], [80.506805, 7.136091], [80.506737, 7.135294],
    [80.506569, 7.134325], [80.506325, 7.133607], [80.505432, 7.133386], [80.504684, 7.133584],
    [80.503975, 7.13409], [80.503426, 7.134674], [80.502533, 7.13445], [80.501984, 7.13386],
    [80.501381, 7.133204], [80.500938, 7.132508], [80.500412, 7.131811], [80.500313, 7.130852],
    [80.500587, 7.130095], [80.501015, 7.129352], [80.501198, 7.128461], [80.500549, 7.127973],
    [80.499748, 7.127681], [80.498917, 7.127633], [80.498146, 7.127845], [80.497154, 7.128057],
    [80.496498, 7.128082], [80.495857, 7.128228], [80.494835, 7.128244], [80.493988, 7.12839],
    [80.493156, 7.128449], [80.492195, 7.128397], [80.491394, 7.128146], [80.491051, 7.127934],
    [80.490318, 7.127517], [80.489578, 7.127198], [80.489082, 7.127187], [80.488693, 7.127216],
    [80.488243, 7.127166], [80.487846, 7.127116], [80.486794, 7.126585], [80.486153, 7.125967],
    [80.485733, 7.125771], [80.485359, 7.125587], [80.484604, 7.125272], [80.4841, 7.125035],
    [80.4832, 7.124889], [80.482132, 7.124712], [80.481316, 7.124714], [80.480705, 7.124732],
    [80.479958, 7.125126], [80.479523, 7.125812], [80.478966, 7.126786], [80.478409, 7.127472],
    [80.477592, 7.127314], [80.477013, 7.12669], [80.476669, 7.12589], [80.47612, 7.125236],
    [80.475464, 7.124787], [80.47467, 7.124554], [80.473953, 7.124162], [80.473213, 7.123759],
    [80.472694, 7.123292], [80.471855, 7.122786], [80.471092, 7.122533], [80.470306, 7.122316],
    [80.469513, 7.12217], [80.468819, 7.122209], [80.467896, 7.122391], [80.46711, 7.122458],
    [80.466408, 7.122519], [80.465469, 7.122717], [80.464684, 7.122827], [80.46386, 7.122628],
    [80.463058, 7.122505], [80.462227, 7.122439], [80.461403, 7.122526], [80.460808, 7.122603],
    [80.460258, 7.122601], [80.459793, 7.122544], [80.459198, 7.122266], [80.458733, 7.122241],
    [80.457893, 7.122462], [80.457443, 7.122389], [80.456268, 7.122104], [80.45578, 7.122056],
    [80.455482, 7.121792], [80.455154, 7.121503], [80.454445, 7.121158], [80.454063, 7.121003],
    [80.453407, 7.120618], [80.452873, 7.120014], [80.452446, 7.119458], [80.452202, 7.118629],
    [80.452011, 7.117756], [80.451401, 7.117204], [80.450722, 7.116625], [80.450127, 7.116087],
    [80.449455, 7.115666], [80.448563, 7.115668], [80.447861, 7.115276], [80.447075, 7.114854],
    [80.446304, 7.114332], [80.445778, 7.113724], [80.445366, 7.112983], [80.445259, 7.111294],
    [80.445625, 7.110989], [80.446136, 7.110319], [80.446724, 7.109749], [80.447128, 7.108995],
    [80.447525, 7.108206], [80.448235, 7.107841], [80.449066, 7.107477], [80.449715, 7.10698],
    [80.45034, 7.106501], [80.450966, 7.105991], [80.451561, 7.105437], [80.452118, 7.104867],
    [80.452629, 7.104211], [80.453011, 7.103497], [80.453445, 7.102741], [80.453842, 7.102027],
    [80.454216, 7.101257], [80.454422, 7.100411], [80.454597, 7.099582], [80.454758, 7.098725],
    [80.454872, 7.097866], [80.454903, 7.09702], [80.454918, 7.096077], [80.455017, 7.095174],
    [80.455193, 7.09436], [80.455574, 7.093601], [80.455948, 7.092872], [80.456551, 7.092074]
]
]);

// If you have uploaded your shapefile as an EE asset (e.g., to your GEE account):
//   Assets tab (left panel) > New > Shape files > upload .shp/.shx/.dbf/.prj
// You can uncomment the line below to use your uploaded asset instead:
// var aoi = ee.FeatureCollection('users/YOUR_USERNAME/aranayaka_boundary');

// Fallback to inline geometry so the script is instantly executable:
var aoi = ee.FeatureCollection([ee.Feature(inlineGeometry)]);

Map.centerObject(aoi, 13);
Map.addLayer(aoi, {color: 'red'}, 'AOI boundary');

// ============================================================
// STEP 1a — DATE DISCOVERY (run this FIRST, before anything else)
// QGIS equivalent: Step 1 — manually browsing Copernicus Data Space
// Browser, checking thumbnails + cloud % for Mar–Apr (pre) and
// Jun–Jul (post) 2016.
// ============================================================

// CORRECTION NOTE ON Sentinel-2 COLLECTION:
// Original template used 'COPERNICUS/S2_SR_HARMONIZED' (Surface Reflectance).
// However, Sentinel-2 Level-2A (SR) is only globally available in GEE starting March 28, 2017.
// Because the Aranayaka Landslide occurred on 17 May 2016, we MUST use
// the Top-Of-Atmosphere (TOA) collection 'COPERNICUS/S2_HARMONIZED' which is available
// starting June 27, 2015. TOA reflectance values are scaled by 10,000 and
// fully compatible with all subsequent spectral index and normalized index formulas.
var s2 = ee.ImageCollection('COPERNICUS/S2_HARMONIZED').filterBounds(aoi);

// Pre-event window: before the 17 May 2016 event
var preWindow = s2.filterDate('2016-03-01', '2016-05-16');
// Post-event window: after the event (monsoon runs into June, so
// widen if nothing clear turns up)
var postWindow = s2.filterDate('2016-05-18', '2016-07-31');

print('--- PRE-EVENT scenes (id) ---', preWindow.aggregate_array('system:index'));
print('--- PRE-EVENT cloud % (same order) ---',
      preWindow.aggregate_array('CLOUDY_PIXEL_PERCENTAGE'));
print('--- POST-EVENT scenes (id) ---', postWindow.aggregate_array('system:index'));
print('--- POST-EVENT cloud % (same order) ---',
      postWindow.aggregate_array('CLOUDY_PIXEL_PERCENTAGE'));

// Auto-pick the least-cloudy scene from each window.
// Inspect the printed lists above first — if the auto-picked date
// still has too much cloud over YOUR specific AOI (not just the
// whole tile), manually filter by date instead, e.g.:
//   var preImage = s2.filterDate('2016-04-10','2016-04-11').first();
var preImage  = preWindow.sort('CLOUDY_PIXEL_PERCENTAGE').first();
var postImage = postWindow.sort('CLOUDY_PIXEL_PERCENTAGE').first();
print('Pre-event image date used:',  preImage.date());
print('Post-event image date used:', postImage.date());

// ============================================================
// STEP 2 — Pre-processing: clip + resample B11 to 10 m
// QGIS equivalent: Step 2 — Clip Raster by Mask Layer;
// Warp (Reproject) B11 from 20 m to 10 m (bilinear)
// ============================================================
var preClip  = preImage.clip(aoi);
var postClip = postImage.clip(aoi);

function resampleB11(img) {
  var b11_10m = img.select('B11')
    .resample('bilinear')
    .reproject({crs: img.select('B8').projection(), scale: 10})
    .rename('B11_10m');
  return img.addBands(b11_10m, null, true);
}
preClip  = resampleB11(preClip);
postClip = resampleB11(postClip);

// ============================================================
// STEP 3 — Spectral indices: NDVI and NBR
// QGIS equivalent: Step 3 — Raster Calculator
//   NDVI = (B08-B04)/(B08+B04)
//   NBR  = (B08-B11)/(B08+B11)   [uses resampled B11]
// ============================================================
function addIndices(img) {
  var ndvi = img.normalizedDifference(['B8', 'B4']).rename('NDVI');
  var nbr  = img.select('B8').subtract(img.select('B11_10m'))
              .divide(img.select('B8').add(img.select('B11_10m')))
              .rename('NBR');
  return img.addBands(ndvi).addBands(nbr);
}
preClip  = addIndices(preClip);
postClip = addIndices(postClip);

Map.addLayer(preClip.select('NDVI'),  {min: -0.2, max: 0.8, palette: ['brown','white','green']}, 'NDVI pre');
Map.addLayer(postClip.select('NDVI'), {min: -0.2, max: 0.8, palette: ['brown','white','green']}, 'NDVI post');

// ============================================================
// STEP 4 — Change detection
// QGIS equivalent: Step 4 — Raster Calculator
//   NDVI_diff = NDVI_pre - NDVI_post
//   dNBR      = NBR_pre  - NBR_post
//   threshold: NDVI_diff > 0.20 -> change mask
// ============================================================
var ndviDiff = preClip.select('NDVI').subtract(postClip.select('NDVI')).rename('NDVI_diff');
var nbrDiff  = preClip.select('NBR').subtract(postClip.select('NBR')).rename('dNBR');

var changeMask = ndviDiff.gt(0.20).selfMask().rename('change_mask');
Map.addLayer(changeMask, {palette: ['orange']}, 'Change mask (NDVI_diff > 0.20)');

// ============================================================
// STEP 5 — Landslide inventory: polygonize + filter < 500 m²
// QGIS equivalent: Step 5 — Raster > Conversion > Polygonize,
// then Field Calculator ($area), then delete polygons < 500 m²
// ============================================================
var changeVectors = changeMask.reduceToVectors({
  geometry: aoi.geometry(),
  scale: 10,
  geometryType: 'polygon',
  eightConnected: true,
  labelProperty: 'change',
  maxPixels: 1e9
});

var landslideInventory = changeVectors.map(function (f) {
  return f.set('area_m2', f.geometry().area(1));
}).filter(ee.Filter.gte('area_m2', 500));

print('Landslide polygon count (after >500 m² filter):', landslideInventory.size());
Map.addLayer(landslideInventory, {color: 'red'}, 'Landslide inventory');

// ============================================================
// STEP 6 — Damage severity (LDSI)
// QGIS equivalent: Step 6 — normalize NDVI_diff & dNBR (0–1) via
// Raster Calculator using layer min/max, then Reclassify into
// 4 classes
// ============================================================
var ndviMM = ndviDiff.reduceRegion({reducer: ee.Reducer.minMax(), geometry: aoi.geometry(), scale: 10, maxPixels: 1e9});
var nbrMM  = nbrDiff.reduceRegion({reducer: ee.Reducer.minMax(), geometry: aoi.geometry(), scale: 10, maxPixels: 1e9});

var ndviMin = ee.Number(ndviMM.get('NDVI_diff_min'));
var ndviMax = ee.Number(ndviMM.get('NDVI_diff_max'));
var nbrMin  = ee.Number(nbrMM.get('dNBR_min'));
var nbrMax  = ee.Number(nbrMM.get('dNBR_max'));

var ndviNorm = ndviDiff.subtract(ndviMin).divide(ndviMax.subtract(ndviMin)).rename('NDVI_norm');
var nbrNorm  = nbrDiff.subtract(nbrMin).divide(nbrMax.subtract(nbrMin)).rename('dNBR_norm');

var ldsi = ndviNorm.multiply(0.6).add(nbrNorm.multiply(0.4)).rename('LDSI');

// Reclassify — these break points are a STARTING point only.
// In QGIS you'd inspect the LDSI histogram and pick natural
// breaks/quantiles; do the same check here before finalizing
// (see the histogram print below).
print('LDSI histogram (inspect to choose break points):',
      ui.Chart.image.histogram({image: ldsi, region: aoi.geometry(), scale: 10}));

var severity = ee.Image(0)
  .where(ldsi.gt(0.00).and(ldsi.lte(0.25)), 1)   // no damage
  .where(ldsi.gt(0.25).and(ldsi.lte(0.50)), 2)   // low
  .where(ldsi.gt(0.50).and(ldsi.lte(0.75)), 3)   // moderate
  .where(ldsi.gt(0.75), 4)                       // severe
  .clip(aoi)
  .rename('severity_class');

var severityPalette = ['e5e5e5', '7fbf3f', 'ffbf00', 'ff8c00', 'd7191c']; // 0=none,1..4
Map.addLayer(severity, {min: 0, max: 4, palette: severityPalette}, 'Severity classes (LDSI)');

// ============================================================
// STEP 7 — Impact assessment (partial — do roads in QGIS/QuickOSM,
// GEE has no native OSM road layer)
// QGIS equivalent: Step 7 — QuickOSM for roads; WorldPop + ESA
// WorldCover for population/land cover zonal stats
// ============================================================
var worldpop = ee.ImageCollection('WorldPop/GP/100m/pop')
  .filter(ee.Filter.eq('country', 'LKA'))
  .filter(ee.Filter.eq('year', 2016))
  .mosaic();

var popBySeverity = ee.FeatureCollection(ee.List([1, 2, 3, 4]).map(function (cls) {
  cls = ee.Number(cls);
  var mask = severity.eq(cls);
  var sum = worldpop.updateMask(mask).reduceRegion({
    reducer: ee.Reducer.sum(), geometry: aoi.geometry(), scale: 100, maxPixels: 1e9
  });
  return ee.Feature(null, {severity_class: cls, population_exposed: sum.get('population')});
}));
print('Population exposed by severity class:', popBySeverity);

var worldcover = ee.ImageCollection('ESA/WorldCover/v200').first().clip(aoi);
Map.addLayer(worldcover, {}, 'ESA WorldCover 2021 (note: 5 yrs post-event, mention as limitation)');

// ============================================================
// STEP 8 — VALIDATION using Table 4.2 coordinates
// QGIS equivalent: Add Delimited Text Layer (CRS=EPSG:32644) ->
// Sample Raster Values tool -> compare to reference class column
// ============================================================

// Coordinates system verification:
// These coordinates are confirmed to be in EPSG:32644 (WGS84 UTM Zone 44N).
// After converting to WGS84, all points map precisely inside the Aranayaka AOI boundary.
var validationPointsUTM = [
  {name: 'Samasara Kanda',     E: 437126.1357, N: 790960.0158, refClass: 'Very High'},
  {name: 'Podape',             E: 440550.1099, N: 789171.7037, refClass: 'Moderate'},
  {name: 'Moragammana',        E: 439031.5729, N: 793584.5427, refClass: 'Very High'},
  {name: 'Labutuwa',           E: 437821.7853, N: 795661.0904, refClass: 'Moderate'},
  {name: 'Galbokka',           E: 439316.4501, N: 791749.0295, refClass: 'High'},
  {name: 'Ganthunaudagama',    E: 437501.8659, N: 788711.0339, refClass: 'Moderate'}
];

var validationFC = ee.FeatureCollection(validationPointsUTM.map(function (p) {
  var pt = ee.Geometry.Point([p.E, p.N], 'EPSG:32644');
  return ee.Feature(pt, {name: p.name, ref_class: p.refClass});
}));
Map.addLayer(validationFC, {color: 'blue'}, 'Validation points (Table 4.2)');

var sampled = severity.addBands(ldsi).sampleRegions({
  collection: validationFC,
  scale: 10,
  geometries: true
});
print('Validation sample (your severity_class + LDSI at each point):', sampled);

// ============================================================
// EXPORTS — everything you need to bring into QGIS for the
// "simple workflow" version / final maps and report
// ============================================================
Export.image.toDrive({
  image: preClip.select(['B4', 'B3', 'B2', 'B8', 'B11_10m', 'NDVI', 'NBR']),
  description: 'Aranayaka_PreEvent_S2_clip',
  region: aoi.geometry(), scale: 10, maxPixels: 1e9
});

Export.image.toDrive({
  image: postClip.select(['B4', 'B3', 'B2', 'B8', 'B11_10m', 'NDVI', 'NBR']),
  description: 'Aranayaka_PostEvent_S2_clip',
  region: aoi.geometry(), scale: 10, maxPixels: 1e9
});

Export.image.toDrive({
  image: ndviDiff.addBands(nbrDiff).addBands(ldsi),
  description: 'Aranayaka_ChangeIndices_NDVIdiff_dNBR_LDSI',
  region: aoi.geometry(), scale: 10, maxPixels: 1e9
});

Export.image.toDrive({
  image: severity,
  description: 'Aranayaka_SeverityMap_4class',
  region: aoi.geometry(), scale: 10, maxPixels: 1e9
});

Export.table.toDrive({
  collection: landslideInventory,
  description: 'Aranayaka_LandslideInventory',
  fileFormat: 'SHP'
});

Export.table.toDrive({
  collection: sampled,
  description: 'Aranayaka_ValidationSample_Results',
  fileFormat: 'CSV'
});

// After running: go to the "Tasks" tab (top right) and click "Run"
// on each export to actually generate the files in your Google Drive.
