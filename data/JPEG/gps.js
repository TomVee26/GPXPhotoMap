function initialize() { 

    var points = []; 

    points.push(new google.maps.LatLng(42.3107998073, 2.1774972416));
    points.push(new google.maps.LatLng(42.3108362686, 2.1776269935));
    points.push(new google.maps.LatLng(42.3107811157, 2.1770928986));
    points.push(new google.maps.LatLng(42.3106469214, 2.176933391));
    points.push(new google.maps.LatLng(42.311035255, 2.1769019589));
    points.push(new google.maps.LatLng(42.3112868797, 2.1769947466));
    points.push(new google.maps.LatLng(42.3114338983, 2.1771113388));
    points.push(new google.maps.LatLng(42.3116329685, 2.1773352195));
    points.push(new google.maps.LatLng(42.3116390035, 2.177237235));
    points.push(new google.maps.LatLng(42.3116393387, 2.1772303618));
    points.push(new google.maps.LatLng(42.3116427753, 2.1770954132));
    points.push(new google.maps.LatLng(42.3113618139, 2.1766152978));
    points.push(new google.maps.LatLng(42.3109334148, 2.1763793472));
    points.push(new google.maps.LatLng(42.3107926827, 2.176180277));
    points.push(new google.maps.LatLng(42.3105617613, 2.1754747722));
    points.push(new google.maps.LatLng(42.3103890102, 2.175492039));
    points.push(new google.maps.LatLng(42.310308544, 2.1753946412));
    points.push(new google.maps.LatLng(42.3100697435, 2.1746350732));
    points.push(new google.maps.LatLng(42.3095555976, 2.1738902573));
    points.push(new google.maps.LatLng(42.3090833612, 2.172715785));
    points.push(new google.maps.LatLng(42.3089061677, 2.1724560298));
    points.push(new google.maps.LatLng(42.3080971465, 2.1720819455));
    points.push(new google.maps.LatLng(42.307436401, 2.1716667898));
    points.push(new google.maps.LatLng(42.3073079903, 2.1716605034));
    points.push(new google.maps.LatLng(42.3070976883, 2.170993723));
    points.push(new google.maps.LatLng(42.3068054952, 2.1709510591));
    points.push(new google.maps.LatLng(42.3063842207, 2.1706263442));
    points.push(new google.maps.LatLng(42.3061092943, 2.1705683414));
    points.push(new google.maps.LatLng(42.3057694919, 2.1695335116));
    points.push(new google.maps.LatLng(42.3056913726, 2.1694864891));
    points.push(new google.maps.LatLng(42.3057226371, 2.1693895105));
    points.push(new google.maps.LatLng(42.305778712, 2.1693864092));
    points.push(new google.maps.LatLng(42.3059256468, 2.1692412347));
    points.push(new google.maps.LatLng(42.3059779499, 2.1689369716));
    points.push(new google.maps.LatLng(42.3056957312, 2.1684164554));
    points.push(new google.maps.LatLng(42.3054498062, 2.1681360807));
    points.push(new google.maps.LatLng(42.3050038051, 2.167741796));
    points.push(new google.maps.LatLng(42.3044034094, 2.1673623472));
    points.push(new google.maps.LatLng(42.3032149393, 2.1669397317));
    points.push(new google.maps.LatLng(42.302812608, 2.166712163));
    points.push(new google.maps.LatLng(42.3028251808, 2.1666523162));
    points.push(new google.maps.LatLng(42.3026508372, 2.1664785594));
    points.push(new google.maps.LatLng(42.3024826124, 2.1666276734));
    points.push(new google.maps.LatLng(42.3022068478, 2.1666553337));
    points.push(new google.maps.LatLng(42.3015853297, 2.1669188607));
    points.push(new google.maps.LatLng(42.3012645543, 2.1669439226));
    points.push(new google.maps.LatLng(42.3012164421, 2.1669971477));
    points.push(new google.maps.LatLng(42.301268829, 2.1670763567));
    points.push(new google.maps.LatLng(42.3014881834, 2.1669711638));
    points.push(new google.maps.LatLng(42.3017296661, 2.1669387259));
    points.push(new google.maps.LatLng(42.3024135455, 2.1665576845));
    points.push(new google.maps.LatLng(42.3028501589, 2.1668042801));
    points.push(new google.maps.LatLng(42.3025443871, 2.1669705771));
    points.push(new google.maps.LatLng(42.3024007212, 2.1671033464));
    points.push(new google.maps.LatLng(42.3023635894, 2.1671856567));
    points.push(new google.maps.LatLng(42.3025051598, 2.1676281374));
    points.push(new google.maps.LatLng(42.3028687667, 2.1677950211));
    points.push(new google.maps.LatLng(42.3028216604, 2.167945141));
    points.push(new google.maps.LatLng(42.3026488256, 2.168040527));
    points.push(new google.maps.LatLng(42.3026311398, 2.1681394335));
    points.push(new google.maps.LatLng(42.302869102, 2.1684079897));
    points.push(new google.maps.LatLng(42.303477712, 2.1686316188));
    points.push(new google.maps.LatLng(42.3035562504, 2.1685994323));
    points.push(new google.maps.LatLng(42.3036684003, 2.1687135939));
    points.push(new google.maps.LatLng(42.3037683964, 2.1690678969));
    points.push(new google.maps.LatLng(42.3036758602, 2.1691416577));
    points.push(new google.maps.LatLng(42.3031699285, 2.1690800507));
    points.push(new google.maps.LatLng(42.302833898, 2.1689368878));
    points.push(new google.maps.LatLng(42.3027687706, 2.1691883449));
    points.push(new google.maps.LatLng(42.3027494084, 2.1696749981));
    points.push(new google.maps.LatLng(42.3029369116, 2.1699509304));
    points.push(new google.maps.LatLng(42.3028648272, 2.170203561));
    points.push(new google.maps.LatLng(42.3027067445, 2.1702050697));
    points.push(new google.maps.LatLng(42.3026397731, 2.1703408565));
    points.push(new google.maps.LatLng(42.3024654295, 2.170487456));
    points.push(new google.maps.LatLng(42.3020900041, 2.1707545035));
    points.push(new google.maps.LatLng(42.301732013, 2.1706155315));
    points.push(new google.maps.LatLng(42.3010315374, 2.1707103308));
    points.push(new google.maps.LatLng(42.300749151, 2.170873275));
    points.push(new google.maps.LatLng(42.3007174674, 2.1709397435));
    points.push(new google.maps.LatLng(42.3008240014, 2.1711022686));
    points.push(new google.maps.LatLng(42.3012371454, 2.1711603552));
    points.push(new google.maps.LatLng(42.3015741818, 2.1713796258));
    points.push(new google.maps.LatLng(42.3016725015, 2.1716006566));
    points.push(new google.maps.LatLng(42.3017078731, 2.1720127109));
    points.push(new google.maps.LatLng(42.3016022611, 2.1727171261));
    points.push(new google.maps.LatLng(42.3015106469, 2.1730923839));
    points.push(new google.maps.LatLng(42.3013788834, 2.1734833997));
    points.push(new google.maps.LatLng(42.3013015185, 2.1735190228));
    points.push(new google.maps.LatLng(42.3009972554, 2.1735535562));
    points.push(new google.maps.LatLng(42.3007941619, 2.1736798715));
    points.push(new google.maps.LatLng(42.3006981052, 2.1746943332));
    points.push(new google.maps.LatLng(42.3008050583, 2.1748281084));
    points.push(new google.maps.LatLng(42.3009830061, 2.1748423576));
    points.push(new google.maps.LatLng(42.3011881113, 2.1750896238));
    points.push(new google.maps.LatLng(42.3013776261, 2.1751674078));
    points.push(new google.maps.LatLng(42.3015326075, 2.1749447007));
    points.push(new google.maps.LatLng(42.3016196117, 2.174474895));
    points.push(new google.maps.LatLng(42.3017859925, 2.174243303));
    points.push(new google.maps.LatLng(42.3024026491, 2.173939459));
    points.push(new google.maps.LatLng(42.3028522544, 2.1741241962));
    points.push(new google.maps.LatLng(42.3030816671, 2.1747119352));
    points.push(new google.maps.LatLng(42.3031213973, 2.1750613768));
    points.push(new google.maps.LatLng(42.3032750376, 2.1752254944));
    points.push(new google.maps.LatLng(42.3034005146, 2.175575858));
    points.push(new google.maps.LatLng(42.3037043586, 2.1757306717));
    points.push(new google.maps.LatLng(42.3042736575, 2.1758618485));
    points.push(new google.maps.LatLng(42.3045255337, 2.1761634294));
    points.push(new google.maps.LatLng(42.3046395276, 2.1764407028));
    points.push(new google.maps.LatLng(42.3048900627, 2.1774040349));
    points.push(new google.maps.LatLng(42.3054177035, 2.1787909046));
    points.push(new google.maps.LatLng(42.3054510634, 2.1789964288));
    points.push(new google.maps.LatLng(42.3055534903, 2.1794028673));
    points.push(new google.maps.LatLng(42.3054725211, 2.1798697393));
    points.push(new google.maps.LatLng(42.3054121714, 2.1798320208));
    points.push(new google.maps.LatLng(42.3046718817, 2.1784764994));
    points.push(new google.maps.LatLng(42.3043085262, 2.178164022));
    points.push(new google.maps.LatLng(42.3041489348, 2.1781280637));
    points.push(new google.maps.LatLng(42.3039451707, 2.1782675385));
    points.push(new google.maps.LatLng(42.3041030858, 2.1784307342));
    points.push(new google.maps.LatLng(42.3041175026, 2.1785744));
    points.push(new google.maps.LatLng(42.3038979806, 2.1785059199));
    points.push(new google.maps.LatLng(42.3034669831, 2.1786194947));
    points.push(new google.maps.LatLng(42.303753309, 2.1793694235));
    points.push(new google.maps.LatLng(42.3037649598, 2.1796279214));
    points.push(new google.maps.LatLng(42.3036931269, 2.1798811387));
    points.push(new google.maps.LatLng(42.3035718407, 2.1796296816));
    points.push(new google.maps.LatLng(42.3032870237, 2.1794784721));
    points.push(new google.maps.LatLng(42.3028717842, 2.1795012709));
    points.push(new google.maps.LatLng(42.3027906474, 2.1796848346));
    points.push(new google.maps.LatLng(42.3030322138, 2.1800303366));
    points.push(new google.maps.LatLng(42.3031260911, 2.1804274712));
    points.push(new google.maps.LatLng(42.3029244225, 2.1803046763));
    points.push(new google.maps.LatLng(42.3029009532, 2.1802703943));
    points.push(new google.maps.LatLng(42.3027568683, 2.1802004054));
    points.push(new google.maps.LatLng(42.3027981911, 2.1806492563));
    points.push(new google.maps.LatLng(42.3026975244, 2.1808395255));
    points.push(new google.maps.LatLng(42.3026039824, 2.181393737));
    points.push(new google.maps.LatLng(42.3026205786, 2.1816246584));
    points.push(new google.maps.LatLng(42.302556457, 2.1821297519));
    points.push(new google.maps.LatLng(42.3022010643, 2.1829952672));
    points.push(new google.maps.LatLng(42.3020148184, 2.1832790785));
    points.push(new google.maps.LatLng(42.3019149061, 2.1837884467));
    points.push(new google.maps.LatLng(42.3018677998, 2.1839249041));
    points.push(new google.maps.LatLng(42.3018092941, 2.1843279898));
    points.push(new google.maps.LatLng(42.3013953958, 2.1850242745));
    points.push(new google.maps.LatLng(42.3012612015, 2.1850753203));
    points.push(new google.maps.LatLng(42.3012207169, 2.185309846));
    points.push(new google.maps.LatLng(42.3010182101, 2.1856732015));
    points.push(new google.maps.LatLng(42.3010094929, 2.1859634668));
    points.push(new google.maps.LatLng(42.3008604627, 2.1866149921));
    points.push(new google.maps.LatLng(42.3003405333, 2.1874826867));
    points.push(new google.maps.LatLng(42.3002286348, 2.187501546));
    points.push(new google.maps.LatLng(42.3003602307, 2.1871806029));
    points.push(new google.maps.LatLng(42.3003004678, 2.1870115399));
    points.push(new google.maps.LatLng(42.3003679421, 2.1871482488));
    points.push(new google.maps.LatLng(42.2999454942, 2.1884984896));
    points.push(new google.maps.LatLng(42.2999712266, 2.1892123763));
    points.push(new google.maps.LatLng(42.2999418899, 2.1890015714));
    points.push(new google.maps.LatLng(42.2994984873, 2.1886484418));
    points.push(new google.maps.LatLng(42.2987372428, 2.1885560732));
    points.push(new google.maps.LatLng(42.2983411141, 2.1888649464));
    points.push(new google.maps.LatLng(42.2982229292, 2.1891297307));
    points.push(new google.maps.LatLng(42.2981328238, 2.1891692933));
    points.push(new google.maps.LatLng(42.2977909259, 2.1896712016));
    points.push(new google.maps.LatLng(42.2975113895, 2.1895603929));
    points.push(new google.maps.LatLng(42.297069747, 2.1890672017));
    points.push(new google.maps.LatLng(42.2969515622, 2.1890274715));
    points.push(new google.maps.LatLng(42.2969143465, 2.1890718956));
    points.push(new google.maps.LatLng(42.2966657393, 2.1892034914));
    points.push(new google.maps.LatLng(42.296602875, 2.1896219999));
    points.push(new google.maps.LatLng(42.2966546752, 2.1898672543));
    points.push(new google.maps.LatLng(42.2965577804, 2.1901136823));
    points.push(new google.maps.LatLng(42.2963313852, 2.1902327053));
    points.push(new google.maps.LatLng(42.2962633241, 2.1903454419));
    points.push(new google.maps.LatLng(42.296075318, 2.1906769462));
    points.push(new google.maps.LatLng(42.2960078437, 2.1907911915));
    points.push(new google.maps.LatLng(42.2958671954, 2.1910947002));
    points.push(new google.maps.LatLng(42.2957945243, 2.1913020685));
    points.push(new google.maps.LatLng(42.2956046741, 2.1915317327));
    points.push(new google.maps.LatLng(42.2953969706, 2.191702053));
    points.push(new google.maps.LatLng(42.295248108, 2.1926858369));
    points.push(new google.maps.LatLng(42.2951939609, 2.1928638685));
    points.push(new google.maps.LatLng(42.295195302, 2.1931894217));
    points.push(new google.maps.LatLng(42.2950547375, 2.1939184796));
    points.push(new google.maps.LatLng(42.2948689107, 2.1943602897));
    points.push(new google.maps.LatLng(42.2948170267, 2.1947259922));
    points.push(new google.maps.LatLng(42.2948506381, 2.1953459177));
    points.push(new google.maps.LatLng(42.294829851, 2.1956031583));
    points.push(new google.maps.LatLng(42.2949251533, 2.1961334813));
    points.push(new google.maps.LatLng(42.29490445, 2.1966082323));
    points.push(new google.maps.LatLng(42.2947648074, 2.1968491282));
    points.push(new google.maps.LatLng(42.2945886198, 2.1971412376));
    points.push(new google.maps.LatLng(42.2945058066, 2.1972196922));
    points.push(new google.maps.LatLng(42.2943576984, 2.1971983183));
    points.push(new google.maps.LatLng(42.2941433731, 2.1973201912));
    points.push(new google.maps.LatLng(42.2937241942, 2.1974018309));
    points.push(new google.maps.LatLng(42.2933537979, 2.1976218559));
    points.push(new google.maps.LatLng(42.2930968087, 2.1977231931));
    points.push(new google.maps.LatLng(42.2927704174, 2.1978150588));
    points.push(new google.maps.LatLng(42.2925990913, 2.1980255283));
    points.push(new google.maps.LatLng(42.2925627138, 2.1980680246));
    points.push(new google.maps.LatLng(42.2923219856, 2.1983711142));
    points.push(new google.maps.LatLng(42.2922464646, 2.1987853479));
    points.push(new google.maps.LatLng(42.2923508193, 2.1988472901));
    points.push(new google.maps.LatLng(42.2922788188, 2.1989165246));
    points.push(new google.maps.LatLng(42.2922104225, 2.198761208));
    points.push(new google.maps.LatLng(42.291955445, 2.1986452024));
    points.push(new google.maps.LatLng(42.2918318957, 2.1984154545));
    points.push(new google.maps.LatLng(42.2910312563, 2.1991171036));
    points.push(new google.maps.LatLng(42.2909360379, 2.1992593445));
    points.push(new google.maps.LatLng(42.2906984109, 2.1993808821));
    points.push(new google.maps.LatLng(42.2903774679, 2.1996696386));
    points.push(new google.maps.LatLng(42.2902730294, 2.1996416431));
    points.push(new google.maps.LatLng(42.2899269406, 2.1999767516));
    points.push(new google.maps.LatLng(42.2898443788, 2.1999711357));
    points.push(new google.maps.LatLng(42.2892089467, 2.2007275186));
    points.push(new google.maps.LatLng(42.2890662029, 2.200744031));
    points.push(new google.maps.LatLng(42.2888348624, 2.2009030357));
    points.push(new google.maps.LatLng(42.2886200342, 2.2009884473));
    points.push(new google.maps.LatLng(42.2883767914, 2.2011516429));
    points.push(new google.maps.LatLng(42.2875146288, 2.2017169185));
    points.push(new google.maps.LatLng(42.2867666278, 2.2021833714));
    points.push(new google.maps.LatLng(42.2864088882, 2.2023129556));
    points.push(new google.maps.LatLng(42.2862416692, 2.2025820985));
    points.push(new google.maps.LatLng(42.2853286285, 2.2036412358));
    points.push(new google.maps.LatLng(42.2851675283, 2.2038766835));
    points.push(new google.maps.LatLng(42.2850811947, 2.2040185053));
    points.push(new google.maps.LatLng(42.2849396244, 2.2041262966));
    points.push(new google.maps.LatLng(42.2847213596, 2.2042976227));
    points.push(new google.maps.LatLng(42.2842214629, 2.2052008566));
    points.push(new google.maps.LatLng(42.2839336284, 2.2056098096));
    points.push(new google.maps.LatLng(42.2835527547, 2.2058122326));
    points.push(new google.maps.LatLng(42.2833903134, 2.206038963));
    points.push(new google.maps.LatLng(42.2827926837, 2.2065982036));
    points.push(new google.maps.LatLng(42.2826349363, 2.2066331562));
    points.push(new google.maps.LatLng(42.2825001553, 2.206758298));
    points.push(new google.maps.LatLng(42.2820831556, 2.20785046));
    points.push(new google.maps.LatLng(42.281749472, 2.208477594));
    points.push(new google.maps.LatLng(42.2809645068, 2.2098090593));
    points.push(new google.maps.LatLng(42.2807210125, 2.2100538947));
    points.push(new google.maps.LatLng(42.2805742454, 2.2103564814));
    points.push(new google.maps.LatLng(42.280692514, 2.2103493568));
    points.push(new google.maps.LatLng(42.2808150575, 2.2099826485));
    points.push(new google.maps.LatLng(42.2807926778, 2.2099061217));
    points.push(new google.maps.LatLng(42.2809554543, 2.2097790521));
    points.push(new google.maps.LatLng(42.2813193128, 2.2092286125));
    points.push(new google.maps.LatLng(42.2813918162, 2.2090265248));
    points.push(new google.maps.LatLng(42.2817431018, 2.2084528673));
    points.push(new google.maps.LatLng(42.2819882724, 2.2080298327));
    points.push(new google.maps.LatLng(42.2823058628, 2.2071513254));
    points.push(new google.maps.LatLng(42.282594787, 2.2067163885));
    points.push(new google.maps.LatLng(42.2832463123, 2.2062397096));
    points.push(new google.maps.LatLng(42.2836459614, 2.2059193533));
    points.push(new google.maps.LatLng(42.2840896156, 2.2054532357));
    points.push(new google.maps.LatLng(42.2843708284, 2.2050036304));
    points.push(new google.maps.LatLng(42.2849311586, 2.2042739019));
    points.push(new google.maps.LatLng(42.2850900795, 2.2039591614));
    points.push(new google.maps.LatLng(42.2854280379, 2.2034575045));
    points.push(new google.maps.LatLng(42.2856510803, 2.2032245714));
    points.push(new google.maps.LatLng(42.2858658247, 2.2030161973));
    points.push(new google.maps.LatLng(42.2863313556, 2.2024479881));
    points.push(new google.maps.LatLng(42.2875430435, 2.2017076984));
    points.push(new google.maps.LatLng(42.2889886703, 2.2008252516));
    points.push(new google.maps.LatLng(42.2892010678, 2.2007806599));
    points.push(new google.maps.LatLng(42.289655786, 2.200226197));
    points.push(new google.maps.LatLng(42.2901987657, 2.199730156));
    points.push(new google.maps.LatLng(42.290542759, 2.1995582432));
    points.push(new google.maps.LatLng(42.2909518797, 2.1992411558));
    points.push(new google.maps.LatLng(42.2918862104, 2.1983083338));
    points.push(new google.maps.LatLng(42.2922451235, 2.1982304659));
    points.push(new google.maps.LatLng(42.2923068143, 2.198273465));
    points.push(new google.maps.LatLng(42.2924011946, 2.1983290371));
    points.push(new google.maps.LatLng(42.2925220616, 2.1981835272));
    points.push(new google.maps.LatLng(42.292791456, 2.1978343371));
    points.push(new google.maps.LatLng(42.2938371822, 2.1973848995));
    points.push(new google.maps.LatLng(42.2941625677, 2.1973302495));
    points.push(new google.maps.LatLng(42.2942434531, 2.1973451693));
    points.push(new google.maps.LatLng(42.2945289407, 2.197249867));
    points.push(new google.maps.LatLng(42.2947831638, 2.1970385592));
    points.push(new google.maps.LatLng(42.2949346248, 2.1966591943));
    points.push(new google.maps.LatLng(42.2949769534, 2.196293911));
    points.push(new google.maps.LatLng(42.294856254, 2.195656132));
    points.push(new google.maps.LatLng(42.2948964871, 2.1954295691));
    points.push(new google.maps.LatLng(42.29485441, 2.1945736092));
    points.push(new google.maps.LatLng(42.2949395701, 2.194174882));
    points.push(new google.maps.LatLng(42.2950953059, 2.1938537713));
    points.push(new google.maps.LatLng(42.2951516323, 2.1931107156));
    points.push(new google.maps.LatLng(42.295377776, 2.1919390094));
    points.push(new google.maps.LatLng(42.2957948595, 2.1914069261));
    points.push(new google.maps.LatLng(42.2960984521, 2.1907730866));
    points.push(new google.maps.LatLng(42.2965201456, 2.1900722757));
    points.push(new google.maps.LatLng(42.2965826746, 2.1899115946));
    points.push(new google.maps.LatLng(42.2966601234, 2.1892491728));
    points.push(new google.maps.LatLng(42.2970051225, 2.1889979672));
    points.push(new google.maps.LatLng(42.2976542171, 2.1897831839));
    points.push(new google.maps.LatLng(42.2979596537, 2.18955989));
    points.push(new google.maps.LatLng(42.2983106039, 2.1889682114));
    points.push(new google.maps.LatLng(42.2986562736, 2.1886691451));
    points.push(new google.maps.LatLng(42.2991184518, 2.1887055226));
    points.push(new google.maps.LatLng(42.2997617628, 2.1886318456));
    points.push(new google.maps.LatLng(42.2999262996, 2.1884958912));
    points.push(new google.maps.LatLng(42.300283704, 2.1876074094));
    points.push(new google.maps.LatLng(42.3008725327, 2.1866969671));
    points.push(new google.maps.LatLng(42.3010124266, 2.1861093957));
    points.push(new google.maps.LatLng(42.3012852576, 2.1854582056));
    points.push(new google.maps.LatLng(42.3013798054, 2.1850724705));
    points.push(new google.maps.LatLng(42.3016229644, 2.1846426465));
    points.push(new google.maps.LatLng(42.3016715795, 2.1847295668));
    points.push(new google.maps.LatLng(42.301752381, 2.1846047603));
    points.push(new google.maps.LatLng(42.3019543011, 2.1837872732));
    points.push(new google.maps.LatLng(42.3023219313, 2.1827481687));
    points.push(new google.maps.LatLng(42.3023467418, 2.1825010702));
    points.push(new google.maps.LatLng(42.3025376815, 2.1820123214));
    points.push(new google.maps.LatLng(42.3026292119, 2.1817176137));
    points.push(new google.maps.LatLng(42.3028377537, 2.1805822011));
    points.push(new google.maps.LatLng(42.3029384203, 2.1804276388));
    points.push(new google.maps.LatLng(42.3029938247, 2.1803920995));
    points.push(new google.maps.LatLng(42.3031099141, 2.1805042494));
    points.push(new google.maps.LatLng(42.3031654023, 2.1802168339));
    points.push(new google.maps.LatLng(42.3036279157, 2.1800533868));
    points.push(new google.maps.LatLng(42.3039811291, 2.179787932));
    points.push(new google.maps.LatLng(42.3041614238, 2.1798090544));
    points.push(new google.maps.LatLng(42.3042454943, 2.1796354651));
    points.push(new google.maps.LatLng(42.3044057563, 2.179578552));
    points.push(new google.maps.LatLng(42.3044956103, 2.1794272587));
    points.push(new google.maps.LatLng(42.3046432156, 2.1794912126));
    points.push(new google.maps.LatLng(42.3047643341, 2.1794473752));
    points.push(new google.maps.LatLng(42.3049163818, 2.1795441024));
    points.push(new google.maps.LatLng(42.3049378395, 2.179487776));
    points.push(new google.maps.LatLng(42.3050048947, 2.1794893686));
    points.push(new google.maps.LatLng(42.3052291945, 2.1797747724));
    points.push(new google.maps.LatLng(42.305394318, 2.179875439));
    points.push(new google.maps.LatLng(42.305517029, 2.179851383));
    points.push(new google.maps.LatLng(42.3058502097, 2.1795522328));
    points.push(new google.maps.LatLng(42.3060125671, 2.1791240852));
    points.push(new google.maps.LatLng(42.3063176684, 2.1789240092));
    points.push(new google.maps.LatLng(42.3067453131, 2.1781859826));
    points.push(new google.maps.LatLng(42.3071290366, 2.1777311806));
    points.push(new google.maps.LatLng(42.3073792364, 2.1771880332));
    points.push(new google.maps.LatLng(42.3075511493, 2.1770313755));
    points.push(new google.maps.LatLng(42.3076918814, 2.1768537629));
    points.push(new google.maps.LatLng(42.3079049494, 2.1767934132));
    points.push(new google.maps.LatLng(42.307971837, 2.1768392622));
    points.push(new google.maps.LatLng(42.3082999047, 2.1766826045));
    points.push(new google.maps.LatLng(42.3084539641, 2.1764390264));
    points.push(new google.maps.LatLng(42.3084402177, 2.1761980467));
    points.push(new google.maps.LatLng(42.3084455822, 2.1761205141));
    points.push(new google.maps.LatLng(42.308679102, 2.1758028399));
    points.push(new google.maps.LatLng(42.3088122066, 2.1754778735));
    points.push(new google.maps.LatLng(42.3088332452, 2.175211329));
    points.push(new google.maps.LatLng(42.308952352, 2.1750938985));
    points.push(new google.maps.LatLng(42.309066765, 2.1752347983));
    points.push(new google.maps.LatLng(42.3092227522, 2.1753869299));
    points.push(new google.maps.LatLng(42.3095606267, 2.1757058613));
    points.push(new google.maps.LatLng(42.3098169453, 2.1757823043));
    points.push(new google.maps.LatLng(42.3100592662, 2.175665712));
    points.push(new google.maps.LatLng(42.3103004973, 2.1756668016));
    points.push(new google.maps.LatLng(42.310566036, 2.1755375527));
    points.push(new google.maps.LatLng(42.310638288, 2.1757347789));
    points.push(new google.maps.LatLng(42.3105656169, 2.1758214477));
    points.push(new google.maps.LatLng(42.3104465939, 2.1766753122));
    points.push(new google.maps.LatLng(42.3106312472, 2.1770375781));
    points.push(new google.maps.LatLng(42.3108241986, 2.1772413421));
    points.push(new google.maps.LatLng(42.3108041659, 2.1775321104));

    map = new google.maps.Map( 
        document.getElementById('map_canvas'), { 
        center: points[0], 
        zoom: 15 
    }); 

    var polyline = new google.maps.Polyline({ 
        path: points, 
        strokeColor: '#ff3c3b', 
        strokeOpacity: 1.0, 
        strokeWeight: 5 
    }); 

    polyline.setMap(map); 

    album = 'data'; 

    latlng = new google.maps.LatLng(42.30478547939091, 2.167603814618182); 
    new google.maps.Marker(createMarker(latlng, 916, "2022-10-14 11:16:21", "dsc01418.jpg")); 

    latlng = new google.maps.LatLng(42.28967359680702, 2.2001744250508475); 
    new google.maps.Marker(createMarker(latlng, 1785, "2022-10-14 15:41:41", "dsc01476.jpg")); 

    latlng = new google.maps.LatLng(42.28078900898639, 2.2100605980129844); 
    new google.maps.Marker(createMarker(latlng, 2042, "2022-10-14 17:13:08", "dsc01520.jpg")); 

    map.center = markerAr[0].position; 
    markerAr[0].openInfo(); 
} 