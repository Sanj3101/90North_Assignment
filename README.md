# Assignment

## Task 1: Frontend Development

### Overview:
In this task, I have created a responsive webpage with the following features:

1. A **fixed navbar** that stays at the top of the page when scrolling.
2. The page is divided into three sections:
   - **Left menu** (collapsible).
   - **Main content area**.
   - **Right-side panel**.
3. A **footer** that stays at the bottom of the page.
4. **JavaScript function** to handle screen resizing and shrink the page based on the viewport width:
   - If the screen width is between 992px and 1600px, the page shrinks to 90%.
   - If the screen width is between 700px and 767px, the page shrinks to 80%.
   - If the screen width is between 600px and 700px, the page shrinks to 75%.
   - If the screen width is less than or equal to 600px, the page shrinks to 50%.

### Features:
- **Responsive Design**: The layout adjusts based on the screen size to provide a good user experience on both desktop and mobile devices.
- **Collapsible Menu**: The left menu can be collapsed to save space on smaller screens.

### How to Use:
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd <project-directory>
   ```
3. Open `index.html` in any browser to see the page in action.
4. Resize the browser window to see the JavaScript function in action, adjusting the page size according to the viewport width.

---

## Task 3: AWS Lambda Sum Function

### Overview:
This Lambda function takes two numbers as input, adds them together, and returns the result.

### Code Explanation:
1. **Input**: The function expects an `event` with two keys:
   - `num1`: The first number.
   - `num2`: The second number.
2. The function retrieves these numbers, adds them, and returns the sum as the response.

### AWS Lambda Code (`lambda_function.py`):

```python
import json

def lambda_handler(event, context):
    # Retrieve numbers from event
    num1 = event.get('num1')
    num2 = event.get('num2')
    
    # Check if both numbers are provided
    if num1 is None or num2 is None:
        return {
            'statusCode': 400,
            'body': json.dumps('Error: Both num1 and num2 must be provided.')
        }
    
    try:
        # Add the numbers
        result = num1 + num2
        return {
            'statusCode': 200,
            'body': json.dumps(f'The sum is: {result}')
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps(f'Error: {str(e)}')
        }
```

### How to Use:
1. Deploy the function on AWS Lambda:
   - Create a new Lambda function in the AWS Console.
   - Copy and paste the code into the Lambda editor.
   - Set up an API Gateway to trigger the Lambda function (if needed).
2. Test the function by passing an event like the following:

```json
{
  "num1": 5,
  "num2": 10
}
```

3. The Lambda function will return the sum of the two numbers:

```json
{
  "statusCode": 200,
  "body": "The sum is: 15"
}
```

### Permissions:
Make sure the Lambda function has appropriate permissions if integrating with other AWS services (e.g., API Gateway, S3, etc.).

---

### Project Structure:
```
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── lambda_function.py
└── README.md
```
