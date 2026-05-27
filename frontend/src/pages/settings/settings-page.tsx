import { SafetyCertificateOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";

import { PageHeader } from "../../components/layout/app-shell";

const { Paragraph, Text, Title } = Typography;

export function SettingsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Workspace"
        title="设置"
        description="用户空间、安全、文件存储和系统参数会集中在这里。"
      />

      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Card
            title={<span><SafetyCertificateOutlined style={{ marginRight: 8 }} />安全边界</span>}
          >
            <Paragraph>
              所有资源将通过平台用户和平台账号双重归属校验。Cookie 与模型 Key 由后端统一加密存储。
            </Paragraph>
          </Card>
        </Col>

      </Row>
    </div>
  );
}
