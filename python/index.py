from mnemonic import Mnemonic
from datetime import datetime  # 导入datetime模块

def get_current_datetime():
    now = datetime.now()  # 获取当前日期时间
    formatted_date = now.strftime('%Y%m%d%H%M%S')  # 格式化为yyyymmddhhmmss
    return formatted_date 

num = 100
filePath = f'output-{get_current_datetime()}.txt'
mnemo = Mnemonic('english')
for _ in range(num):
    words = mnemo.generate(strength=128)
    with open(filePath, 'a') as file:  # 以追加模式打开文件
        file.write(words + '\n')
        
print(f'已经生成{num}个助记词，保存在当前文件夹下的{filePath}中')