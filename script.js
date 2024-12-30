document.getElementById("carModel").addEventListener("change", function() {
    let carModel = document.getElementById("carModel").value;

    // 设置各车型的滤芯价格
    const filterPrices = {
        oldMalibu: { oil: 58, air: 80, ac: 150 },
        classicMalibu: { oil: 58, air: 200, ac: 180 },
        newMalibu: { oil: 58, air: 100, ac: 180 },
        newMalibu20T: { oil: 58, air: 100, ac: 180 },
        cruze: { oil: 28, air: 80, ac: 124 },
        traxOil: { oil: 58, air: 80, ac: 150 },
        newCruze: { oil: 58, air: 80, ac: 180 },
        classicCruze: { oil: 28, air: 80, ac: 150 },
        oldCruze: { oil: 58, air: 80, ac: 150 },
        cobolt: { oil: 28, air: 80, ac: 124 },
        newCobolt: { oil: 28, air: 80, ac: 180 },
        traverse: { oil: 58, air: 101, ac: 180 },
        traverse20T: { oil: 58, air: 180, ac: 180 },
        trailblazer: { oil: 58, air: 240, ac: 180 },
        captiva: { oil: 58, air: 100, ac: 224 },
        smoothpatrol: { oil: 0, air: 0, ac: 124 }
    };

    // 获取选中的车型的滤芯价格
    const selectedModel = filterPrices[carModel];
    if (selectedModel) {
        document.getElementById("oilFilterPrice").innerText = "机油滤芯价格: " + selectedModel.oil + "元";
        document.getElementById("airFilterPrice").innerText = "发动机空气滤芯价格: " + selectedModel.air + "元";
        document.getElementById("acFilterPrice").innerText = "空调滤芯价格: " + selectedModel.ac + "元";
    } else {
        document.getElementById("oilFilterPrice").innerText = "";
        document.getElementById("airFilterPrice").innerText = "";
        document.getElementById("acFilterPrice").innerText = "";
    }
});

document.getElementById("calculateTotal").addEventListener("click", function() {
    let total = 0;
    let projectDetails = '';  // 新增一个变量，用于存储项目详情

    // 获取选择的车型
    let carModel = document.getElementById("carModel").value;
    if (!carModel) {
        alert("请选择车型");
        return;
    }

    // 设置各车型的滤芯价格
    const filterPrices = {
        oldMalibu: { oil: 58, air: 80, ac: 150 },
        classicMalibu: { oil: 58, air: 200, ac: 180 },
        newMalibu: { oil: 58, air: 100, ac: 180 },
        newMalibu20T: { oil: 58, air: 100, ac: 180 },
        cruze: { oil: 28, air: 80, ac: 124 },
        traxOil: { oil: 58, air: 80, ac: 150 },
        newCruze: { oil: 58, air: 80, ac: 180 },
        classicCruze: { oil: 28, air: 80, ac: 150 },
        oldCruze: { oil: 58, air: 80, ac: 150 },
        cobolt: { oil: 28, air: 80, ac: 124 },
        newCobolt: { oil: 28, air: 80, ac: 180 },
        traverse: { oil: 58, air: 101, ac: 180 },
        traverse20T: { oil: 58, air: 180, ac: 180 },
        trailblazer: { oil: 58, air: 240, ac: 180 },
        captiva: { oil: 58, air: 100, ac: 224 },
        smoothpatrol: { oil: 0, air: 0, ac: 124 }
    };

    // 获取机油选择
    let oilType = document.getElementById("oilType").value;
    let oilPrice = 0;
    let oilName = ""; // 添加机油名称变量

    switch (oilType) {
        case "cpOil4L":
            oilPrice = 198;
            oilName = "中石油 4L";
            break;
        case "shellOil4L":
            oilPrice = 338;
            oilName = "壳牌 4L";
            break;
        case "castrol4L":
            oilPrice = 478;
            oilName = "嘉实多 4L";
            break;
        case "silvermobil4L":
            oilPrice = 478;
            oilName = "银美孚 4L";
            break;
        case "mobilGoldOil4L":
            oilPrice = 554;
            oilName = "金美孚 4L";
            break;
    }
    if (oilPrice > 0) {
        total += oilPrice; // 添加机油价格
        projectDetails += `更换机油 (${oilName}): ${oilPrice}元<br>`;  // 添加项目详情
    }

    // 获取附加机油选择
    let additionaloiltype = document.getElementById("additionaloiltype").value;
    let additionaloilPrice = 0;
    let additionalOilName = ""; // 添加附加机油名称变量

    switch (additionaloiltype) {
        case "cpOil1L":
            additionaloilPrice = 50;
            additionalOilName = "中石油 1L";
            break;
        case "shellOil1L":
            additionaloilPrice = 90;
            additionalOilName = "壳牌 1L";
            break;
        case "castrol1L":
            additionaloilPrice = 120;
            additionalOilName = "嘉实多 1L";
            break;
        case "silvermobil1L":
            additionaloilPrice = 120;
            additionalOilName = "银美孚 1L";
            break;
        case "mobilGoldOil1L":
            additionaloilPrice = 160;
            additionalOilName = "金美孚 1L";
            break;
        case "cpOil2L":
            additionaloilPrice = 100;
            additionalOilName = "中石油 2L";
            break;
        case "shellOil2L":
            additionaloilPrice = 180;
            additionalOilName = "壳牌 2L";
            break;
        case "castrol2L":
            additionaloilPrice = 240;
            additionalOilName = "嘉实多 2L";
            break;
        case "silvermobil2L":
            additionaloilPrice = 240;
            additionalOilName = "银美孚 2L";
            break;
        case "mobilGoldOil2L":
            additionaloilPrice = 320;
            additionalOilName = "金美孚 2L";
            break;
    }

    if (additionaloilPrice > 0) {
        total += additionaloilPrice; // 添加附加机油价格
        projectDetails += `附加机油 (${additionalOilName}): ${additionaloilPrice}元<br>`; // 包含附加机油名称
    }

// 获取附加机油买二送一选择
let buy2get1freetype = document.getElementById("buy2get1freetype").value;
let buy2get1freePrice = 0;
let buy2get1freeName = ""; // 添加附加买二送一名称变量

switch (buy2get1freetype) {
    case "cpOil8L":
        buy2get1freePrice = 198;
        buy2get1freeName = "中石油 8L";
        break;
    case "shellOil8L":
        buy2get1freePrice = 338;
        buy2get1freeName = "壳牌 8L";
        break;
    case "castrol8L":
        buy2get1freePrice = 478;
        buy2get1freeName = "嘉实多 8L";
        break;
    case "silvermobil8L":
        buy2get1freePrice = 478;
        buy2get1freeName = "银美孚 8L";
        break;
    case "mobilGoldOil8L":
        buy2get1freePrice = 554;
        buy2get1freeName = "金美孚 8L";
        break;
    case "cpOil10L":
        buy2get1freePrice = 248;
        buy2get1freeName = "中石油 10L";
        break;
    case "shellOil10L":
        buy2get1freePrice = 428;
        buy2get1freeName = "壳牌 10L";
        break;
    case "castrol10L":
        buy2get1freePrice = 598;
        buy2get1freeName = "嘉实多 10L";
        break;
    case "silvermobil10L":
        buy2get1freePrice = 598;
        buy2get1freeName = "银美孚 10L";
        break;
    case "mobilGoldOil10L":
        buy2get1freePrice = 714;
        buy2get1freeName = "金美孚 10L";
        break;
}

if (buy2get1freePrice > 0) {
    total += buy2get1freePrice; // 添加买二送一机油价格
    projectDetails += `机油买二送一 (${buy2get1freeName}): ${buy2get1freePrice}元<br>`; // 包含买二送一机油名称
}

    // 获取选中的车型的滤芯价格
    const selectedModel = filterPrices[carModel];
    if (selectedModel) {
        // 只有勾选了滤芯才加价
        if (document.getElementById("oilFilter").checked) {
            total += selectedModel.oil;  // 机油滤芯价格
            projectDetails += `更换机油滤芯: ${selectedModel.oil}元<br>`;
        }
        if (document.getElementById("airFilter").checked) {
            total += selectedModel.air;  // 发动机空气滤芯价格
            projectDetails += `更换发动机空气滤芯: ${selectedModel.air}元<br>`;
        }
        if (document.getElementById("acFilter").checked) {
            total += selectedModel.ac;   // 空调滤芯价格
            projectDetails += `更换空调滤芯: ${selectedModel.ac}元<br>`;
        }
    }

    // 可勾选项目费用
    if (document.getElementById("airconditioningcleaning").checked) {
        total += 208; // 空调清洗
        projectDetails += `空调清洗: 208元<br>`;
    }

// 获取清洗节气门类型选择框的值
let cleaningthrottletype = document.getElementById("cleaningthrottletype").value;
let cleaningthrottlePrice = 0;
let cleaningthrottleName = ""; // 添加清洗节气门名称变量

switch (cleaningthrottletype) {
    case "cleanthethrottlevalve1.5T":
        cleaningthrottlePrice = 240;
        cleaningthrottleName = "清洗节气门1.5T";
        break;
    case "cleanthethrottlevalve2.0T":
        cleaningthrottlePrice = 300;
        cleaningthrottleName = "清洗节气门2.0T";
        break;
}

// 如果有清洗节气门类型选择
if (cleaningthrottlePrice > 0) {
    total += cleaningthrottlePrice; // 添加清洗节气门价格
    projectDetails += `${cleaningthrottleName}: ${cleaningthrottlePrice}元<br>`; // 包含清洗节气门名称
}


    if (document.getElementById("engineCleaning").checked) {
        total += 100; // 发动机内部清洗
        projectDetails += `发动机内部清洗: 100元<br>`;
    }
    if (document.getElementById("brakeFluid").checked) {
        total += 389; // 刹车油
        projectDetails += `更换刹车油及刹车清洗: 389元<br>`;
    }
    if (document.getElementById("antifreeze").checked) {
        total += 340; // 防冻液
        projectDetails += `更换防冻液: 340元<br>`;
    }
    if (document.getElementById("carbonCleaning").checked) {
        total += 280; // 积碳清洗
        projectDetails += `发动机积碳清洗: 280元<br>`;
    }

    // 获取变速箱油类型选择框的值
    var transmissionOil = document.getElementById("transmissionOil").value;

    // 根据选择的值计算费用
    if (transmissionOil === "transmissionOilMachine") {
        total += 1080; // 机器换
        projectDetails += `更换变速箱油（机器换）: 1080元<br>`;
    } else if (transmissionOil === "transmissionOilGravity") {
        total += 618; // 重力换
        projectDetails += `更换变速箱油（重力换）: 618元<br>`;
    } else if (transmissionOil === "transmissionOilGravity2.0T") {
        total += 950; // 2.0T重力换
        projectDetails += `更换变速箱油（2.0T重力换）: 950元<br>`;
    } else if (transmissionOil === "changxungearboxoilreplacement") {
        total += 516; // 畅巡更换变速箱油
        projectDetails += `更换变速箱油（畅巡更换）: 516元<br>`;
    }

    // Labor cost
    let laborCost = parseFloat(document.getElementById("laborCost").value);
    if (isNaN(laborCost) || laborCost < 0) {
        alert("请输入有效的工时费");
        return;
    }
    total += laborCost;
    projectDetails += `工时费: ${laborCost}元<br>`;

    // 显示总价
    document.getElementById("totalPrice").innerText = "总价: " + total + "元";

    // 显示项目明细
    document.getElementById("projectDetails").innerHTML = projectDetails;

    // 调用 sendToTelegram 函数发送项目明细
    sendToTelegram(projectDetails, total);
});

// 发送消息到 Telegram
function sendToTelegram(projectDetails, total) {
    const token = '7778388968:AAF64jjM2gzzmFPoIkFbQ9UwUmI63zVtxxY';
    const chatId = '8183321985';
    
    // 使用 \n 来替换 <br>
    const message = `项目明细:\n\n${projectDetails.replace(/<br>/g, '\n')}\n总价: ${total}元`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => console.log("消息发送成功", data))
        .catch(error => console.error("发送失败", error));
}