function main_graph_reader() {
    read_data()
}
let parser_results
function read_data() {
    const table = "0,1T 2T 3T 4T 5T 6T,1SPLITHURTIG1,1T 2T 3T 4T 5T 6T,1SPLITHURTIG2,1T 2T 3T 4T 5T 6T,1SPLITHURTIG3,1T 2T 3T 4T 5T 6T,1SPLITHURTIG4,1T 2T 3T 4T 5T 6T,1SPLITHURTIG5,1T 2T 3T 4T 5T 6T,1SPLITHURTIG6,1T 2T 3T 4T 5T 6T,1SPLITHURTIG7,1T 2T 3T 4T 5T 6T,1SPLITHURTIG8,1F 2F 3T 4T 5F 6F,0SPLITHURTIG8,1F 2F 3T 4T 5F 6F,0SPLITHURTIG8,1T 2T 3F 4T 5T 6F,0SPLITHURTIG8,1F 2T 3T 4T 5T 6F,0SPLITHURTIG8,1F 2T 3T 4T 5T 6F,0SPLITHURTIG8,1F 2F 3T 4F 5F 6F,0SPLITHURTIG8,1F 2T 3F 4F 5T 6F,0SPLITHURTIG8,1F 2F 3T 4T 5F 6F,0SPLITHURTIG8,1F 2T 3T 4T 5T 6F,0SPLITHURTIG8,1T 2T 3F 4T 5T 6F,0SPLITHURTIG8,1F 2F 3T 4T 5F 6F,0SPLITHURTIG8,1F 2T 3F 4T 5T 6F,0SPLITHURTIG8,1T 2T 3T 4T 5T 6T,1SPLITHURTIG9,1T 2T 3T 4T 5T 6T,1SPLITHURTIG10,1T 2T 3T 4T 5T 6F,0SPLITHURTIG10,1F 2F 3F 4F 5F 6F,0SPLITHURTIG10,1F 2F 3F 4F 5F 6F,0SPLITHURTIG10,1F 2F 3F 4F 5F 6F,0SPLITHURTIG10,1F 2F 3F 4F 5F 6F,0SPLITHURTIG10,1F 2F 3F 4T 5F 6F,0SPLITHURTIG10,1F 2F 3F 4T 5F 6F,0SPLITHURTIG10,1F 2F 3F 4T 5F 6F,0SPLITHURTIG10,1F 2F 3F 4F 5F 6F,0SPLITHURTIG10,1F 2F 3F 4F 5F 6F,0SPLITHURTIG10,1F 2C 3S 4S 5S 6S,0SPLITHURTIG10,1F 2F 3F 4T 5F 6F,0SPLITHURTIG10,1T 2T 3T 4T 5T 6T,1SPLITHURTIG11,1F 2T 3T 4T 5T 6F,0SPLITHURTIG11,1T 2T 3T 4T 5T 6T,1SPLITHURTIG12,1T 2T 3T 4T 5T 6T,1SPLITHURTIG13,1T 2T 3T 4T 5T 6T,1SPLITHURTIG14,1T 2T 3T 4T 5T 6F,0SPLITHURTIG14,1T 2T 3T 4T 5T 6T,1SPLITHURTIG15,1T 2T 3T 4T 5T 6T,1SPLITHURTIG16,1T 2T 3T 4T 5T 6T,1SPLITHURTIG17,1T 2T 3T 4T 5T 6T,1SPLITHURTIG18,1T 2T 3F 4T 5T 6F,0SPLITHURTIG18,1F 2T 3F 4T 5T 6F,0SPLITHURTIG18,1F 2T 3F 4T 5T 6F,0SPLITHURTIG18,1F 2T 3T 4T 5T 6F,0SPLITHURTIG18,1F 2T 3F 4T 5F 6F,0SPLITHURTIG18,1F 2T 3T 4T 5F 6F,0SPLITHURTIG18,1F 2T 3F 4F 5F 6F,0SPLITHURTIG18,1F 2T 3F 4T 5T 6F,0SPLITHURTIG18,1T 2T 3F 4T 5T 6F,0SPLITHURTIG18,1F 2F 3T 4T 5T 6F,0SPLITHURTIG18,1T 2T 3T 4T 5T 6T,1SPLITHURTIG19,1T 2T 3T 4T 5T 6T,1SPLITHURTIG20,1T 2T 3T 4T 5T 6F,0SPLITHURTIG21,1T 2T 3T 4T 5T 6T,1SPLITHURTIG22,1T 2T 3T 4T 5T 6T,1SPLITHURTIG23,1T 2T 3T 4T 5T 6T,1SPLITHURTIG24,1F 2C 3S 4S 5S 6S,0SPLITHURTIG24,1F 2T 3F 4T 5F 6F,0SPLITHURTIG24,1F 2C 3S 4S 5S 6S,0SPLITHURTIG24,1T 2T 3F 4T 5T 6F,0SPLITHURTIG24,1F 2C 3S 4S 5S 6S,0SPLITHURTIG24,1F 2C 3S 4S 5S 6S,0SPLITHURTIG24,1T 2T 3F 4T 5T 6F,0SPLITHURTIG24,1F 2T 3F 4T 5F 6F,0SPLITHURTIG24,1F 2C 3S 4S 5S 6S,0SPLITHURTIG24,1T 2C 3S 4S 5S 6S,0SPLITHURTIG24,1F 2F 3T 4T 5F 6F,0SPLITHURTIG24,1T 2T 3T 4T 5T 6F,0SPLITHURTIG24,1F 2F 3T 4T 5F 6F,0SPLITHURTIG24,1F 2F 3T 4T 5F 6F,0SPLITHURTIG24,1F 2F 3T 4T 5F 6F,0SPLITHURTIG24,1F 2T 3F 4F 5T 6F,0SPLITHURTIG24,1F 2T 3F 4F 5T 6F,0SPLITHURTIG24,1F 2F 3F 4T 5F 6F,0SPLITHURTIG24,1F 2F 3F 4T 5F 6F,0SPLITHURTIG24,1F 2F 3F 4F 5F 6F,0SPLITHURTIG24,1F 2F 3F 4T 5F 6F,0SPLITHURTIG24,1F 2F 3F 4T 5F 6F,0SPLITHURTIG24,1F 2T 3T 4F 5F 6F,0SPLITHURTIG24,1T 2T 3T 4T 5T 6F,0SPLITHURTIG24,1F 2T 3F 4F 5T 6F,0SPLITHURTIG24,1T 2T 3F 4T 5T 6F,0SPLITHURTIG24,1T 2T 3F 4T 5T 6F,0SPLITHURTIG24,1F 2C 3S 4S 5S 6S,0SPLITHURTIG24,1F 2F 3F 4F 5F 6F,0SPLITHURTIG24,1T 2T 3T 4T 5T 6F,0SPLITHURTIG24,1F 2C 3S 4S 5S 6S,0SPLITHURTIG24,1F 2C 3S 4S 5S 6S,0SPLITHURTIG24,1F 2C 3S 4S 5S 6S,0SPLITHURTIG24,1T 2T 3T 4T 5T 6T,1SPLITHURTIG25,1T 2T 3T 4T 5T 6T,1SPLITHURTIG26,1F 2C 3S 4S 5S 6S,0SPLITHURTIG26,1F 2C 3S 4S 5S 6S,0SPLITHURTIG26,1T 2C 3S 4S 5S 6S,0SPLITHURTIG26,1T 2C 3S 4S 5S 6S,0SPLITHURTIG26,1T 2T 3T 4T 5T 6T,1SPLITHURTIG27,1T 2T 3T 4T 5T 6T,1SPLITHURTIG28,1T 2T 3T 4T 5T 6T,1SPLITHURTIG29,1T 2T 3T 4T 5T 6T,1SPLITHURTIG30,1T 2T 3T 4T 5T 6F,0SPLITHURTIG30,1T 2T 3T 4T 5T 6F,0SPLITHURTIG30,1T 2T 3T 4T 5T 6T,1SPLITHURTIG31,1T 2T 3T 4T 5T 6T,1SPLITHURTIG32,1T 2T 3T 4T 5T 6T,1SPLITHURTIG33,1T 2T 3T 4T 5T 6T,1SPLITHURTIG34,1T 2T 3T 4T 5T 6T,1SPLITHURTIG35,1T 2T 3T 4T 5T 6T,1SPLITHURTIG36,1F 2T 3T 4T 5F 6F,0SPLITHURTIG36,1F 2C 3S 4S 5S 6S,0SPLITHURTIG36,1F 2C 3S 4S 5S 6S,0SPLITHURTIG36,1F 2F 3T 4T 5T 6F,0SPLITHURTIG36,1F 2C 3S 4S 5S 6S,0SPLITHURTIG36,1F 2F 3T 4T 5T 6F,0SPLITHURTIG36,1F 2T 3T 4T 5F 6F,0SPLITHURTIG36,1T 2T 3T 4T 5T 6T,1SPLITHURTIG37,1F 2T 3F 4T 5T 6F,0SPLITHURTIG37,1F 2T 3T 4T 5F 6F,0SPLITHURTIG37,1T 2T 3T 4T 5T 6T,1SPLITHURTIG38,1F 2C 3S 4S 5S 6S,0SPLITHURTIG39,1F 2F 3T 4F 5F 6F,0SPLITHURTIG39,1T 2T 3T 4T 5T 6T,1SPLITHURTIG40,1T 2T 3T 4T 5T 6T,1SPLITHURTIG41,1T 2T 3T 4T 5T 6T,1SPLITHURTIG42,1T 2T 3T 4T 5T 6T,1SPLITHURTIG43,1T 2T 3F 4T 5T 6F,0SPLITHURTIG43,1T 2T 3T 4T 5T 6T,1SPLITHURTIG44,1T 2T 3T 4T 5T 6T,1SPLITHURTIG45,1T 2T 3T 4T 5T 6T,1SPLITHURTIG46,1F 2C 3S 4S 5S 6S,0SPLITHURTIG46,1T 2T 3T 4T 5T 6F,0SPLITHURTIG46,1T 2T 3T 4T 5T 6F,0SPLITHURTIG46,1T 2T 3F 4T 5T 6F,0SPLITHURTIG46,1T 2C 3S 4S 5S 6S,0SPLITHURTIG46,1F 2C 3S 4S 5S 6S,0SPLITHURTIG46,1F 2C 3S 4S 5S 6S,0SPLITHURTIG46,1F 2C 3S 4S 5S 6S,0SPLITHURTIG46,1T 2T 3T 4T 5T 6T,1SPLITHURTIG47,1T 2T 3T 4T 5T 6T,1SPLITHURTIG48,1T 2T 3T 4T 5T 6T,1SPLITHURTIG49,1T 2T 3T 4T 5T 6T,1SPLITHURTIG50,1F 2F 3T 4T 5F 6F,0SPLITHURTIG50,1F 2T 3T 4F 5F 6F,0SPLITHURTIG50,1T 2T 3T 4T 5T 6T,1SPLITHURTIG51,1F 2T 3T 4F 5F 6F,0SPLITHURTIG51,1F 2T 3T 4F 5F 6F,0SPLITHURTIG51,1F 2T 3T 4F 5F 6F,0SPLITHURTIG51,1F 2T 3T 4F 5F 6F,0SPLITHURTIG51,1F 2T 3T 4F 5F 6F,0SPLITHURTIG51,1F 2T 3T 4F 5F 6F,0SPLITHURTIG51,1T 2T 3T 4T 5T 6F,0SPLITHURTIG51,1F 2T 3T 4F 5F 6F,0SPLITHURTIG51,1F 2T 3F 4F 5F 6F,0SPLITHURTIG51,1F 2T 3T 4F 5F 6F,0SPLITHURTIG51,1F 2T 3T 4F 5F 6F,0SPLITHURTIG51,1T 2T 3T 4T 5T 6T,1SPLITHURTIG52,1T 2T 3T 4T 5T 6T,1SPLITHURTIG53,1F 2T 3F 4T 5F 6F,0SPLITHURTIG53,1F 2C 3S 4S 5S 6S,0SPLITHURTIG53,1F 2C 3S 4S 5S 6S,0SPLITHURTIG53,1F 2C 3S 4S 5S 6S,0SPLITHURTIG53,1F 2C 3S 4S 5S 6S,0SPLITHURTIG53,1F 2C 3S 4S 5S 6S,0SPLITHURTIG53,1F 2C 3S 4S 5S 6S,0SPLITHURTIG53,1F 2C 3S 4S 5S 6S,0SPLITHURTIG53,1F 2C 3S 4S 5S 6S,0SPLITHURTIG53,1T 2T 3T 4T 5T 6T,1SPLITHURTIG54,1T 2T 3T 4T 5T 6T,1SPLITHURTIG55,1T 2C 3S 4S 5S 6S,0SPLITHURTIG55,1T 2T 3T 4T 5T 6F,0SPLITHURTIG55,1F 2C 3S 4S 5S 6S,0SPLITHURTIG55,1F 2F 3F 4F 5F 6F,0SPLITHURTIG55,1T 2C 3S 4S 5S 6S,0SPLITHURTIG55,1T 2C 3S 4S 5S 6S,0SPLITHURTIG55,1T 2C 3S 4S 5S 6S,0SPLITHURTIG55,1T 2C 3S 4S 5S 6S,0SPLITHURTIG55,1F 2C 3S 4S 5S 6S,0SPLITHURTIG55,1F 2C 3S 4S 5S 6S,0SPLITHURTIG55,1F 2T 3T 4T 5F 6F,0SPLITHURTIG55,1F 2T 3T 4T 5F 6F,0SPLITHURTIG55,1F 2T 3T 4T 5F 6F,0SPLITHURTIG55,1F 2C 3S 4S 5S 6S,0SPLITHURTIG55,1T 2C 3S 4S 5S 6S,0SPLITHURTIG55,1T 2C 3S 4S 5S 6S,0SPLITHURTIG55,1T 2C 3S 4S 5S 6S,0SPLITHURTIG55,1T 2C 3S 4S 5S 6S,0SPLITHURTIG55,1T 2C 3S 4S 5S 6S,0SPLITHURTIG55,1T 2T 3T 4T 5T 6T,1SPLITHURTIG56,1T 2T 3T 4T 5T 6T,1SPLITHURTIG57,1T 2T 3T 4T 5T 6T,1SPLITHURTIG58,1T 2T 3T 4T 5T 6T,1SPLITHURTIG59,1T 2T 3F 4T 5T 6F,0SPLITHURTIG59,1T 2T 3T 4T 5T 6T,1SPLITHURTIG61,1F 2F 3F 4F 5F 6F,0SPLITHURTIG61,1F 2T 3T 4T 5T 6F,0SPLITHURTIG61,1F 2T 3T 4T 5T 6F,0SPLITHURTIG61,1F 2T 3T 4T 5T 6F,0SPLITHURTIG61,1T 2T 3T 4T 5T 6T,1SPLITHURTIG62,1T 2T 3T 4T 5T 6T,1SPLITHURTIG63,1T 2T 3T 4T 5T 6T,1SPLITHURTIG64,1T 2T 3T 4T 5T 6T,1SPLITHURTIG65,1T 2C 3S 4S 5S 6S,0SPLITHURTIG65,1T 2T 3T 4T 5T 6T,1SPLITHURTIG66,1T 2T 3T 4T 5T 6T,1SPLITHURTIG"
    if (!table) {
        alert('Sorry, you don\'t have any data loaded for this session! Go to the *data* page and insert some.')
        return
    }
    parser_results = lesson_to_json(table.trim().replaceAll('<tr>', '').replaceAll('<td>', '').replaceAll('</td></tr>', '\r\n').replaceAll('</td>', ',').replace('</tbody>', ''))
}

function filter_by_size(min_size) {
    // filtered_results = {nodes: [], links: [], users: parser_results.users}
    let iter_obj
    let i
    const allowed_ids = []
    for (i = 0; i < parser_results.nodes.length; i++) {
        iter_obj = parser_results.nodes[i]
        if (iter_obj.appearances >= min_size) {
            // filtered_results.nodes.push(iter_obj)
            allowed_ids.push(iter_obj.id)
        }
    }

    // for (i = 0; i < parser_results.links.length; i++) {
    //     iter_obj = parser_results.links[i]
    //     if (allowed_ids.includes(iter_obj.source.id) && allowed_ids.includes(iter_obj.target.id)) {
    //         filtered_results.links.push(iter_obj)
    //     }
    // }
    
    return allowed_ids
}

set_up_sidenav()
main_graph_reader()
